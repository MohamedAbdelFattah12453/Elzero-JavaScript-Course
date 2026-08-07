/*
    Date And Time
    - getTime() => Number Of Millseconds
    - getDate() => Day Of The Month
    - getFullYear()
    - getMonth() => Zero Based
    - getDay() => Day Of The Week
    - getHours()
    - getMinutes()
    - getSeconds()
*/

let dateNow = new Date();
let Birthday = new Date("Mar 1, 11");
let dateDiff = dateNow - Birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);


console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());