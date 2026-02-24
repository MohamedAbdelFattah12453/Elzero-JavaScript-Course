/*
    Number Methods
    Two Dots To Call A Methods
    toString()
    toFixed()
    parseInt()
    parseFloat()
    isInteger() [ES6]
    isNaN() [ES6]
*/

console.log(100..toString());   
console.log(100.10.toString());

console.log(100.555555.toFixed(2));

console.log(Number("100 Mohamed"));
console.log(+"100 Mohamed");
console.log(parseInt("100 Mohamed"));
console.log(parseInt(" Mohamed 100 Mohamed"));
console.log(parseInt("100.500 Mohamed"));
console.log(parseFloat("100.500 Mohamed"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger("100.500"));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Mohamed" / 20))