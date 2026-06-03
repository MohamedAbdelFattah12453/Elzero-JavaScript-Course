let nums = [2, 12, 11, 5, 10, 1, 99];

let numsReduce = nums.reduce(function (acc, current) {
    return current % 2 === 0 ? acc * current : acc + current;
});

console.log(numsReduce);

// 500