/*
    Loop For Advanced Example
*/

let products = ["Keyword", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let i = 0;

for (;;) {
    console.log(products[i]);
    i+= 2;
    if (i === products.length) break;
}
