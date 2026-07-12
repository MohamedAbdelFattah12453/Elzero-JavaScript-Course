/*
    Set vs WeakSet
    "
        The WeakSet is weak,
        meaning references to in a WeakSet are held weakly.
        If no other references to an object stored in the WeakSet exist,
        those objects can be garbage collected.
    "
    --
    Set     => Can Store Any Data Values
    WeakSet => Collection Of Objects Only
    --
    Set     => Have Size Property
    WeakSet => Does Not Have Size Property
    --
    Set     => Have Keys, Values, Entires
    WeakSet => Does Not Have clear, Keys, Values And Entries
    --
    Set     => Can Use forEach
    WeakSet => Cannot Use forEach

    Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set is a ${mySet.size}`);

// Values + Keys [Ailas For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myWs = new WeakSet([{A: 1, B: 2, }]);

console.log(myWs);

// WeakSet Use Cases