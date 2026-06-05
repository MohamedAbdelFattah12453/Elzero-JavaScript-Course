// Method One

let objMethodOne = {
    property: "Method One",
};

console.log(objMethodOne.property); // Method One

// Method Two

let objMethodTwo = new Object()

objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three

let objMethodThree = Object.create({});

objMethodThree.property = "Method Three"; // "Method Three"

console.log(objMethodThree.property);

// Method Four
let objMethodFour = Object.assign({}, { property: "Method Four", });

console.log(objMethodFour.property); // "Method Four"