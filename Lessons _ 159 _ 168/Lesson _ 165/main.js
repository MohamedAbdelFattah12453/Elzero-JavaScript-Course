/*
    Generators
    - Delegate Generator
*/

function* generatorNums() {
    yield 1;
    yield 2;
    yield 3;
}

function* generatorLetters() {
    yield "A";
    yield "B";
    yield "C";
}

function* generateAll() {
    yield* generatorNums();
    yield* generatorLetters();
    yield* [4, 5, 6];
}

let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());