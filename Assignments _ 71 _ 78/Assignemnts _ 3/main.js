let myArray = ["E", "l", "z", ["e", "r"], "o"];

let myArrayReduce = myArray.reduce(function (acc, current) {
    return acc + (Array.isArray(current) ? current.reduce((a, c) => a + c) : current);
})

console.log(myArrayReduce);

// Elzero