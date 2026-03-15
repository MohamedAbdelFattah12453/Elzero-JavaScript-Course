/*
    If Challenge
*/

let a = 10;

if (a < 10) { 
    console.log(10);
} else if(a >= 10 && a <= 40) { 
    console.log("10 To 40");
} else if (a > 40) { 
    console.log("> 40");
} else {
    console.log("UnKnown")
}

// Write With Ternary If Syntax

let result = a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40
    ? console.log("> 40")
    : console.log("UnKnown");

console.log(result);

let st = "Elzero Web School"

if ((st.length * 2).toString() === "34") {
    console.log("Good");
}

// W Position May Change
if ((st.charAt(7).toLowerCase()) === "w") {
    console.log("Good");
}

if ( st !== "string") {
    console.log("Good");
}

if (!(st === "Number")) {
    console.log("Good");
}

if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
