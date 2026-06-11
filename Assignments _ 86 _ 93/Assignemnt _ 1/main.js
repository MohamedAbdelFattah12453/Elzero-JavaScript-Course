let myElement = document.querySelector("div");
let myElement2 = document.querySelector("#elzero");
let myElement3 = document.querySelector(".element");
let myElement4 = document.querySelector("[name='js']");

let myDiv = document.querySelectorAll("div")[0];
let myDiv2 = document.querySelectorAll("#elzero")[0];
let myDiv3 = document.querySelectorAll(".element")[0];
let myDiv4 = document.querySelectorAll("[name='js']")[0];

let myElement5 = document.getElementById("elzero");
let myElement6 = document.getElementsByClassName("element")[0];
let myElement7 = document.getElementsByName("js")[0];
let myElement8 = document.getElementsByTagName("div")[0];


console.log(myElement);
console.log(myElement2);
console.log(myElement3);
console.log(myElement4);

console.log(myDiv);
console.log(myDiv2);
console.log(myDiv3);
console.log(myDiv4);

console.log(myElement5);
console.log(myElement6);
console.log(myElement7);
console.log(myElement8);


console.log(document.body.firstElementChild);
console.log(document.body.children[0]);

console.log(document.body.childNodes[1]);