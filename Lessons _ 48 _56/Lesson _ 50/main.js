/*
    Loop
    Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let color = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors :")
    for (let j = 0; j < color.length; j++) {
        console.log(`- ${color[j]}`);
    }
    console.log("Models :");
    for (let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
    }
}