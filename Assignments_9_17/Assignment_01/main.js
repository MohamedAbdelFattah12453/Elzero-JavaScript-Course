let NumberOne = 10, NumberTwo = 20;
//ouput
console.log("" + NumberOne + NumberTwo);// Normal Concatenate => 1020
console.log(typeof ("" + NumberOne + NumberTwo));// Normal Concatenate => String
console.log(`${"" + NumberOne + NumberTwo}`);// Template Literals => 1020
console.log(typeof (`${"" + NumberOne + NumberTwo}`));// Template Literals  => 1020

console.log(NumberTwo + "\n" + NumberOne)
/*
    Normal Concatenate
    20
    10
*/
console.log(`${NumberTwo + "\n" + NumberOne}`)
/*
    Template Literals Way
    20
    10
*/

