let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let count = mix.indexOf()

// Output
2
3
4

for (let i = start; i < mix.length; i++) {
    if (i === start) {
        continue;
    } if (typeof mix[i] === "string") {
        continue;
    }
    console.log(mix[i])
}