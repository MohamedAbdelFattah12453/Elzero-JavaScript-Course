/*
    DOM [Traversing]
    - nextSibling
    - previousSibling
    - nextElementSibling
    - PreviousElementSibling
    - parentElement
*/

let span = document.querySelector(".Two");

console.log(span.parentElement);

span.onclick = function () {
    span.parentElement.remove()
}