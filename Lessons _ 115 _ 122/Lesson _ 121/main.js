/*
    Destruturing
    - Destruturing Mixed Content
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: n,
  theAge: a,
  skills: [, , three],
  addresses: { egypt: e },
} = user;

console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a}`);
console.log(`Your Last Skills Is: ${three}`);
console.log(`Your Live Is: ${e}`);

