/*
    String Challenge
    All Solution Must Be In One Chain
    You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Methods In Your Solution [Slice, CharAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // [Elzero]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // ELzero School

// Solution Must Be Dynamic And String May Change
console.log(a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.slice(-1).toLowerCase()); // elZERO WEB SCHOOL