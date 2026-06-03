/*
    Higher Order Function Challenges

    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Only In The Code

    You Cannot Use
    - Numbers
    - Letters

    You Must Use [Filter + Map + Reduce + Your Knowledge]
    Order Is Not Improtant
    All In One Chain
*/

let myString = "1,2,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";

let Solution = myString.split(",").filter(function (ele) {
    return isNaN(parseInt(ele));
}).map(function (ele) {
    return ele.replaceAll("_", " ")
}).reduce(function (acc, current, index, arr) {
    return acc + current
}).slice(true, -true)

console.log(Solution) // Elzero Web School