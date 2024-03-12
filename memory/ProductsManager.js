class Product {
    static #lastId = 0;

    #id;
    #photo;
    #category;
    #price;
    #stock;

    constructor(props) {
        this.#id = ++Product.#lastId;
        this.#photo = props.photo;
        this.#category = props.category;
        this.#price = props.price;
        this.#stock = props.stock;
    }

    static getLastId() {
        return Product.#lastId;
    }

    static reduceLastId() {
        Product.#lastId--;
    }

    getId() {
        return this.#id;
    }
}

class UserManager {
    #products;

    constructor() {
        this.#products = [];
    }

    create(data) {
        this.#products.push(data);
        // This is safe code, no need for try-catch
    }

    read() {
        return this.#products;
        // This operation is safe, it returns an empty array if it's empty, implemented in the constructor
    }

    readOne(id) {
        return this.#products.find(product => product.getId() === id);
    }

    destroy(id) {
        this.#products = this.#products.filter(product => product.getId() !== id);
        Product.reduceLastId();
    }
}
