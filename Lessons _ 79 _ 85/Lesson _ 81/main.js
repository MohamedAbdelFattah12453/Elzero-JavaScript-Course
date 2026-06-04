/*
    Object
        Nested Object And Trainings
*/

let avaliable = true;


let user = {
    name: "Mohamed",
    age: 15,
    skills: ["HTML", "CSS", "JS"],
    avaliable: false,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Giza",
        },
    },
    checkAv: function () {
        if (user.avaliable === true) {
            return `Free For Work`;
        } else {
            return `Not Free`;
        }
    },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"]["egypt"]["two"]);

console.log(user.checkAv());