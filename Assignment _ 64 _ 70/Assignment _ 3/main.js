// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// }

// Arrow Function Syntax 
let curryingChecker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(curryingChecker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(curryingChecker("Ahmed")("Not Available")()); // Iam Not Avaialble