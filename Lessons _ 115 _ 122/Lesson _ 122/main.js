/*
    Destructuring
    - Challenge
*/

let chosen = 1;

let myFriend = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

switch (chosen) {
    case 1:
    let {title: t1, age: a1, available: av1, skills: [, one]} = myFriend[0];
    console.log(t1);
    console.log(a1);
    console.log(av1 ? "Available" : "Not Available");
    console.log(one);
    break;
    case 2:
        let {title: t2, age: a2, available: av2, skills: [, two]} = myFriend[1];
    console.log(t2);
    console.log(a2);
    console.log(av2 ? "Available" : "Not Available");
    console.log(two);
    break;
    case 3:
        let {title: t3, age: a3, available: av3, skills: [, three]} = myFriend[2];
    console.log(t3);
    console.log(a3);
    console.log(av3 ? "Available" : "Not Available");
    console.log(three);
    break;
}
