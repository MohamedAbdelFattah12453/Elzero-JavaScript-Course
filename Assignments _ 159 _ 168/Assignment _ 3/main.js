let myDate = new Date(2022, 3, 30, 18, 13, 20);

console.log(myDate);
let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
console.log(`Pervious Month Is ${months[myDate.getMonth()]} And Last Day Is ${myDate.getDate()}`)

// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)";
"Previous Month Is April And Last Day Is 30";
