/* 
    Destructuring
    "is a JavaScript experssion that allows us to extract data from arrays,
        objeccts, and maps and set them into new, distinct variables. "
    - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFrineds = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Mohamed"] = myFrineds;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFrineds[4]);

let [ , y, ,z] = myFrineds;

console.log(y);
console.log(z);