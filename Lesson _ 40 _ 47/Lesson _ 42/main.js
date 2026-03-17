/*
    Arrays Methods [Addding And Removing]
    unshift("","") Add Element To The Frist
    push("","") Add Element To The End
    shift()Remove Frist Element From Array
    pop()Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);  


myFriends.unshift("Osama", "Nabil");

console.log(myFriends);

myFriends.push("Samah", "Eman");

console.log(myFriends);

let Last = myFriends.pop();

console.log(myFriends);

console.log(`Last Name Is ${Last}`);
