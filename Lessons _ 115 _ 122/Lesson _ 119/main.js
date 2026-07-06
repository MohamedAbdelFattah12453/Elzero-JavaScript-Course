/*
    Destructturing
    - Destructuring Object
    --- Naming The Varibles
    --- Add New Property
    --- Nested Object
    --- Destructuring The Nested Object Only
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    skills: {
        html: 70,
        css: 80,
    }
};

const {
    theName: n,
    theAge: a,
    theCountry,
    theColor: co = "Red",
    skills: { html: h, css},
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My Html Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillsOne, css: skillTwo } = user.skills;

console.log(`My Html Skill Progress Is ${skillsOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);