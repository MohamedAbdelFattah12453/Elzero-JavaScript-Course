let theNumber = 100020003000;

console.log([...new Set(theNumber.toString())].filter(Number).join(""));

// Needed Output
123
