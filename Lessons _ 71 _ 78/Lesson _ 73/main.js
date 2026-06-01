/*
    Filter
        method creates a new array
        with all elements that pass the test implemented by the provided function

        Syntax filter(callBackFunction(Element, Undex, Array){ }, This Arg)
        Element => The current element being processed in the array.
        Index => The index of current element being processed in the array.
        Array => The Current Array
*/

// Get Friends With Name Starts With A 
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterFriends = friends.filter(function (el) {
    return el.startsWith("A") ? true : false;
});

console.log(filterFriends);

// Get Even Numbers Only 
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
    return el % 2 === 0;
});

console.log(evenNumbers);



// Test Map Vs Filter

// let add = numbers.map(function (el) {
//     return el + el;
// });

// console.log(add);


// let addFilter = numbers.filter(function (el) {
//     return el + el;
// });

// console.log(addFilter);