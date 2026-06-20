let User = prompt("Print Number From - To", "10-15").split("-");

let start = Math.min(parseInt(User[0]), parseInt(User[1]));
let end = Math.max(parseInt(User[0]), parseInt(User[1]));

for (let i = start; i <= end; i++) {
    if (i <= end) {
        console.log(i);
    } else {
        console.log(i);
    }110
}