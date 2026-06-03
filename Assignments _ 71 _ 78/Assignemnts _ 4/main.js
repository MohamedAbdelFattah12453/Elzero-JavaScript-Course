let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let mapAndfilter = numsAndStrings
    .filter(function (ele) {
    return !isNaN(parseInt(ele));
    })
    .map(function (ele) {
    return -ele;
})

console.log(mapAndfilter);

// [-1, -10, 10, 20, -5, -3]