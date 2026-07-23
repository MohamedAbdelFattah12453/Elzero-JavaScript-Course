let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let Letters = chars.filter((e) => typeof e === "string");

let Numbers = chars.filter((e) => typeof e === "number");   

let numberCount = Numbers.length

let letterCount = Letters.slice(0, numberCount);

let Result = [...letterCount, ...Letters];

console.log(Result);

// Needed Output
["A", "B", "C", "A", "B", "C", "D", "E"];


