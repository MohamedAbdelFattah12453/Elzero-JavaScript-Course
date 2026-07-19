/*
    Array Methods
    - Array copyWithin(Target, Start => Opional, End => Optional)
    "Copy Part Of An Array To Another Lication In The Same Array"
    -- Any Negative Value Will Count From The End
    -- Target
    ---- Index To Copy Part To
    ---- If At Or Greater Than Array Length Will Be Copied
    -- Start
    ---- Index To Start Copying Fron
    ---- If Ommited = Start From Index 0
    -- End
    ---- Index To End Copying From
    ---- Not Including End
    ---- If Ommited = Reach The End
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];



// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);