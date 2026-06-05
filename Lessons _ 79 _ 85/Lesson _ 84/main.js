/*
    Object
        Create Object With create method
*/

let user = {
    age: 20,
    doubleAge: function () {
        return this.age * 2;
    },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());
let Obj = Object.create({});

Obj.a = 100

console.log(Obj);

let copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());