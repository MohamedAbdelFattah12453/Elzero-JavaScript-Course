let dateNow = new Date();
let myBirthday = new Date("Mar 1 2011");
let dateDiff = dateNow - myBirthday;

console.log(`${Math.floor(dateDiff / 1000)} Seconds`);
console.log(`${Math.floor(dateDiff / 1000 / 60)} Minutes`);
console.log(`${Math.floor(dateDiff / 1000 / 60 / 60)} Hours`);
console.log(`${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365)} Years`);