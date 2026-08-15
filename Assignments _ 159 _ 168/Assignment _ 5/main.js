let Start = performance.now();

for (let i = 1; i <= 99999; i++) {
    console.log(i);
}

let end = performance.now();

let duration = end - Start;

console.log(`Loop Took ${Math.floor(duration)} Millseconds .`)