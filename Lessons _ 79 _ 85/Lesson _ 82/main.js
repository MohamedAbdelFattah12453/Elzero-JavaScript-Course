/*
    Object
        Create With Nerw Keyword new Object();
*/

let user = new Object({
    age: 20,
});

console.log(user);

user.age = 15;
user["country"] = "Egypt";

user.sayHello = function () {
    return `Hello`;
}

console.log(user)
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());
