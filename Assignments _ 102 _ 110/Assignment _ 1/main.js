let User = prompt("Print Number From - To", "10-15").split("-");

let start = Math.min(parseInt(User[0]), parseInt(User[1]));
let End = Math.max(parseInt(User[0]), parseInt(User[1]));

for (let i = start; i <= End; i++) {
    if (i <= End) {
        console.log(i);
    } else {
        console.log(i);
    }
}