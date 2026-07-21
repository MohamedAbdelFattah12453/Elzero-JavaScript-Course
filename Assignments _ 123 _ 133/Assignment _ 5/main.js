let theName = "Elzero";

// First Method
console.log([...theName]);

// Second Method
console.log(Array.from(theName));

// Three Method
console.log(theName.split(""));

// Four Method
console.log(Object.assign([], theName));

// Five Method
console.log(theName.match(/./g));

// Needed Output
["E", "l", "z", "e", "r", "o"];
