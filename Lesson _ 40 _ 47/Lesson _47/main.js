/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]

console.log(my[--counter].slice(--zero, counter) + my[++zero].slice(counter)) // "Elzero"

console.log(my[zero].slice(-counter, -zero) + (my[zero].slice(-(--counter))).toUpperCase()) // "rO"