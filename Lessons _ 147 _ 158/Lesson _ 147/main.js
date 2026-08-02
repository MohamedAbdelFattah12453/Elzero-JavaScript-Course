/*
Object Oriented Programming (OOP)
    - What is OOP and Why do we use it?
--------------------------------------------------
1. What is OOP?
    - A programming paradigm based on the concept of "Objects".
    - Objects contain Data (Properties) and Code (Methods).

2. Why do we use OOP?
    - Reusability: Write code once and use it multiple times.
    - Organization: Keeps code structured, clean, and readable.
    - Security: Protects sensitive data using Encapsulation.
    - Maintainability: Makes debugging and updating code easier.
    - Real-World Modeling: Simulates real-life entities (User, Product, Car).
--------------------------------------------------
*/

// Example: Constructor Function (Old Way vs Objects)

function User(id, username, salary) {
//Properties
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
}

// Creating Objects (Instances)
let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);

console.log(userOne.i); // 100
console.log(userOne.u); // "Elzero"
console.log(userOne.s); // 6000
