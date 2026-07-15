/*
    Array Method
    - Array.from(iterable, maFunc, This)
    --- Variable
    --- String Numbers
    --- Set
    --- Using The Map Function
    --- Arrow Function
    --- Shorten The Method + Use arguments
*/

console.log(Array.from("Mohamed"));
console.log(
    Array.from("12345", function (n) {
        return +n + +n;
    })
);

console.log(Array.from("12345", (n) => +n + +n));
    
let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(Array.from(mySet));

// console.log([... new Set(myArray)]); // Future

function af() {
    return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "Mohamed", 1, 2, 3));