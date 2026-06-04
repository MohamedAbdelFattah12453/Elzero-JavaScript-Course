/*
    Object
        Intro And What Is Object
        Testing Window Object
        Accessing Object
*/

let user = {
    // Properties
    theName: "Mohamed",
    theAge: 15,
    // Methods
    sayHello: function () {
        return `Hello`;
    },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());
