/*
 * Project: Elzero Web School - JavaScript Lessons
 * Lesson: [22: Lessons 18-22]
 * Description:"Understanding JavaScript data types and how to check them using the typeof operator."
 * Author: Mohamed Abdel Fattah
 * Date: 2026-02-14
 */

/* Challenge 1 */ 
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/*
    [++a]
    Value = 11;
    Explain = pre-Increment Operator
    [+]
    Explain = Addition Operator
*/

/*
    [+b++]
    value = 20;
    Explain = Frist Unary Plus + Post-Increment Operator
    [+]
    Explain = Addition Operator
*/

/*
    [+c++]
    value = 80;
    Explain = Unary plus Operator + Post Increment
    [-]
    Explain = Subtraction Addition
*/

/*
    [+a++]
    value = 10;
    Explain = Unary Operator + Post Increment
*/
// So The Total Value = 11 + 20 + 80 - 11 = 100;

// a = 12 , b = 21 , c =81
console.log(++a + -b + +c++ - -a++ + +a)

/*
    [++a]
    value = 13;
    Explain = Pre-Increment Operator
    [+]
    Explain = Addition Operator
*/

/*
    [-b]
    value = -21;
    Explain = Unary Negative Operator
    [+]
    Explain = Addition Operator
*/

/*
    [+c++]
    Value = 82;
    Explain = Unary Plus + Post-Increment
    [-]
    Explain = Subtraction Operator
*/

/*
    [-a++]
    Value = -13;
    Explain = Post-Incement increase THE value to 1  to Be 14 But It Not used 
    [+]
    Explain = Addititon Operator
*/

/*
    [+a]
    Value = 14;
    Explain = Pre-Increment
*/
// So, The Totel Value = 13 - 21 + 81 - -13 + 14 = 100;

// a = 14 , b = 21 , c = 82;

console.log(--c + +b + --a * +b++ - +b * a + --a - +true)
/*
    [--c]
    Value = 81;
    Explain = Pre-Decrement Operator
    [+]
    Explain = Addition Operator
*/

/*
    [+b]
    Value = 21;
    Explain = Unary Plus
    [+]
    Explain = Addition Operator
*/

/*
    [--a]
    Value = 13
    Explain = Pre-Decrement
    [*]
    Explain = Multiplication Operartor
*/

/*
    [+b++]
    Value = 21
    Explain = Unary Plus + Post-Increment operator
    [-]
    Explain = Subtraction operator
*/

/*
    [+b]
    Value = 22
    Explain = Unary Plus But it Has Not Effect Because Its Number
    [*]
    Explain = Multiplication Operartor
*/

/*
    [a]
    Value = 13;
    Explain = From The pervious
    [+]
    Explain = Addition Operator
*/

/*
    [--a]
    Value = 12;
    Explain = Pre-Dcrement
    [-]
    Explain = Subtraction Operator
*/

/*
    [true]
    Value = 1;
    Explain = Unary Plus Operator
*/


/*Challenge 2 */

let d = "-100";
let e = "20";
let f = 30;
let g = true;


// Only Use Variables Value
// Do Not Use Variables Twice

console.log(-d * +e); // 2000
console.log(++e * ++g + -d + ++f) // 173

