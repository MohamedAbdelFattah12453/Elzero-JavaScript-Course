let myString = "EElllzzzzzzzeroo";

let myStringFilter = myString
    .split("")
    .filter(function (ele, index, arr) {
        return arr.indexOf(ele) === index;
    })
    .join("");

console.log(myStringFilter)

// Elzero