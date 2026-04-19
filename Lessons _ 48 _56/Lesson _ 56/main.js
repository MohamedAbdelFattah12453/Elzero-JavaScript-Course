/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amagd", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
let counter = 0;

document.write(`<div>We Have X Admins</div>`)
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") break;
    counter++
}
document.write(`<div>We Have ${counter} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < counter; i++) {
    let count = 0;
    document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);
    document.write(`<h3>Team Members :</h3>`)
    for (let j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i][0] === myEmployees[j][0]) {
            document.write(`<p> - ${count + 1} ${myEmployees[j]}</p> `)
            count++
        }
    }
    document.write(`<hr>`); 
    document.write(`<div>`);
}