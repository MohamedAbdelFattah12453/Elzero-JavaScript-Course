/*
    Regular Experssion

    Syntax
    /pattern/modifier(s);
    new RegExp("Pattern", "modifier(S)")

    Modifiers => Flags
    i => case-insensitive
    g => global
    m => Multilines

    Search Methods
    - match(Pattern)

    Match

    -- Matches A String Againstb a Regular Expression Pattern
    -- Returns An Array With The Matches
    -- Returns null if No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig;

console.log(myString.match(regex));