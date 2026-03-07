/*
String Methods
    subtraction(Start [Mand], End [Opt] Not Including End)
    Start > End Will Swap
    Start < It Start From 0
    Use Length To Get Last Charcter
    substr(Start [Mand], Characters To Extract)
    Startt >= Length = ""
    Negative Start From End
    includes(Value [Mand], Start [Opt] Default 0) [ES6]
    startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
    endsWith(Value [Mand], Start [Opt] Default Full Length) [ES6]
*/

let a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 5, a.length - 3));

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("z", 2));

console.log(a.endsWith("l"))