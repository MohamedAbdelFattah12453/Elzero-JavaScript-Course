/*
    Function this Keyword
    -- this Introduction
    -- this Inside Object Method 
    --- When a function is called as a method of an object,
    --- its this is set to the object the method is called on.
    -- Global Object
    -- Test Variables With Window Abd This
    -- Function Context

    Search
        Strict Mode
*/


console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
    console.log(this);
    return this
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
    console.log(this);
};

let user = {
    age: 15,
    ageInDays: function () {
        console.log(this);
        return this.age * 365;
    },
};

console.log(user.age);
console.log(user.ageInDays());
