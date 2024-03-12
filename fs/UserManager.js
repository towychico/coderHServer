const fs = require("fs").promises;

const path = "users.json";

class User {
    static #lastId = 0;

    #id;
    #photo;
    #email;
    #password;
    #role;

    constructor(props) {
        this.#id = ++User.#lastId;
        this.#photo = props.photo;
        this.#email = props.email;
        this.#password = props.password;
        this.#role = props.role;
    }

    static getLastId() {
        return User.#lastId;
    }

    static reduceLastId() {
        User.#lastId--;
    }

    getId() {
        return this.#id;
    }
}

class UserManager {
    #users;

    constructor() {
        this.#users = [];
        this.init();
    }

    async init() {
        try {
            const data = await fs.readFile(path, "utf-8");
            this.#users = JSON.parse(data);
        } catch (error) {
            console.error("Error initializing:", error);
        }
    }

    async saveToFile() {
        try {
            await fs.writeFile(path, JSON.stringify(this.#users, null, 2), "utf-8");
            console.log("Data saved to file successfully.");
        } catch (error) {
            console.error("Error writing to file:", error);
        }
    }

    create(data) {
        const user = new User(data);
        this.#users.push(user);
        this.saveToFile();
    }

    read() {
        return this.#users;
    }

    readOne(id) {
        return this.#users.find(user => user.getId() === id);
    }

    destroy(id) {
        this.#users = this.#users.filter(user => user.getId() !== id);
        User.reduceLastId();
        this.saveToFile();
    }
}

module.exports = UserManager;
