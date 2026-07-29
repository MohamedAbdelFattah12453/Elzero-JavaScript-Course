/*
    Regular Expression

    - replace
    - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "Javascript"));
console.log(txt.replaceAll("@", "Javascript"));

let re = /@/ig;

console.log(txt.replaceAll(re, "Javascript"));
console.log(txt.replaceAll(/@/ig, "Javascript"));

