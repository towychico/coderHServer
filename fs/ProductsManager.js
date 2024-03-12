const fs = require("fs").promises; // Import fs module with promises

const path = "products.json";

class Product {
    static #lastId = 0;

    #id;
    #photo;
    #category;
    #price;
    #stock;

    constructor(props) {
        this.#id = ++Product.#lastId; // Access static field using class name
        this.#photo = props.photo;
        this.#category = props.category;
        this.#price = props.price;
        this.#stock = props.stock;
    }

    static getLastId(){
        return Product.#lastId; // Access static field using class name
    }

    static reduceLastId(){
        Product.#lastId--; // Access static field using class name
    }

    getId(){
        return this.#id;
    }
}

class UserManager {
    #products;

    constructor() {
        this.#products = [];
        this.init();
    }

    async init() {
        try {
            const data = await fs.readFile(path, "utf-8");
            this.#products = JSON.parse(data);
        } catch (error) {
            console.error("Error reading file:", error);
        }
    }

    async create(data) {
        const product = new Product(data);
        this.#products.push(product);
        await this.saveToFile();
    }

    async saveToFile() {
        try {
            await fs.writeFile(path, JSON.stringify(this.#products, null, 2), "utf-8");
            console.log("Data saved to file successfully.");
        } catch (error) {
            console.error("Error writing to file:", error);
        }
    }

    async read() {
        try {
            const data = await fs.readFile(path, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            console.error("Error reading file:", error);
            return [];
        }
    }

    async readOne(id) {
        try {
            const data = await fs.readFile(path, "utf-8");
            const products = JSON.parse(data);
            return products.find(product => product.getId() === id);
        } catch (error) {
            console.error("Error reading file:", error);
            return null;
        }
    }

    async destroy(id) {
        this.#products = this.#products.filter(product => product.getId() !== id);
        await this.saveToFile();
        Product.reduceLastId();
    }
}
