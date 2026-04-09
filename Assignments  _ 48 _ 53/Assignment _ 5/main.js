let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
for (let i = friends.indexOf("Ahmed"); i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) {
        continue;
    }
    console.log(`${count++} => ${friends[i]}`);
}