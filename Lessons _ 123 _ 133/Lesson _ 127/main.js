/*
    - Map vs WeakSet
    "
        WeakSet Allows Garbage Collector To Do Its Task But Not Map
    "

    --
    Map     => Key Can Be Anything
    WeakSet => Key Can Be Object Only
    --
*/

let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Referance

console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Value");

wMapUser = null; // Override The Referance

console.log(myWeakMap);