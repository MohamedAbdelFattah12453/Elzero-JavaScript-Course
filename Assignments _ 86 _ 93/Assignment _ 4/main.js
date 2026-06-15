let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");

let tempTitle = divOne.title;
let tempText = divOne.textContent;

divOne.title = divTwo.title;
divOne.textContent = divTwo.textContent;

divTwo.title = tempTitle;
divTwo.textContent = tempText + ` ${divOne.classList.length + divTwo.classList.length}`;

