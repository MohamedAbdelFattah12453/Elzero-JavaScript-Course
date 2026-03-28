let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr2.concat(arr1).sort().slice(arr2.length).join("").toLowerCase()




console.log(allArrs); // fxy