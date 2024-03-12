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

    getLastId() {
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
    }

    create(data) {
        this.#users.push(data);

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
    }
}
