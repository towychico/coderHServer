# User Management System

This project implements a simple user management system using Node.js. It consists of four files:

1. `user.js`: Defines the `User` class, representing a user with properties such as id, photo, email, password, and role.
2. `userManager.js`: Defines the `UserManager` class, which manages a collection of users and provides methods for user management such as creating, reading, updating, and deleting users. It uses the `User` class internally.
3. `product.js`: Defines the `Product` class, representing a product with properties such as id, photo, category, price, and stock.
4. `productManager.js`: Defines the `ProductManager` class, similar to `UserManager`, but for managing products.

## Installation

Before running the application, make sure you have Node.js installed on your system.

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/user-management-system.git
    ```

2. Navigate to the project directory:

    ```bash
    cd user-management-system
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To use the user management system, you can create an instance of the `UserManager` class and call its methods to manage users. Similarly, you can create an instance of the `ProductManager` class to manage products.

Example:

```javascript
const UserManager = require('./userManager');
const ProductManager = require('./productManager');

const userManager = new UserManager();
const productManager = new ProductManager();

// Create a new user
userManager.create({
    photo: 'user1.jpg',
    email: 'user1@example.com',
    password: 'password123',
    role: 'admin'
});

// Create a new product
productManager.create({
    photo: 'product1.jpg',
    category: 'Electronics',
    price: 99.99,
    stock: 10
});

// Read all users
console.log(userManager.read());

// Read a specific user
console.log(userManager.readOne(1));

// Destroy a user
userManager.destroy(1);
```

## Test Cases

Here are some test cases to verify the functionality of the user and product management system:

1. Create a new user and verify that it is added to the list of users.
2. Create a new product and verify that it is added to the list of products.
3. Read all users/products and verify that the list contains the expected users/products.
4. Read a specific user/product by its id and verify that the returned user/product matches the expected user/product.
5. Destroy a user/product by its id and verify that it is removed from the list of users/products.

You can create additional test cases based on your specific requirements.
