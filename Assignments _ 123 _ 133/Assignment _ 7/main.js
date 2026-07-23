let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6];

// First Method
console.log([...numsOne, ...numsTwo]);

// Second Method
console.log(numsOne.concat(numsTwo));

// Three Method
numsOne.push(...numsTwo);

console.log(numsOne);