/*
    Number Challenge
*/

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d)));
// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.round(d))); // 10000


// Ger Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));
console.log(d.toFixed(0));

// Use Variable b + d To Get This Values 
console.log(Math.trunc(b) / Math.ceil(d).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.trunc(b) / Math.ceil(d))) // 67 => Number


