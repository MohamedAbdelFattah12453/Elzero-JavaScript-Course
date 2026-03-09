let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substr(-3, 1)); // e
console.log(userName.split("", 1).toLocaleString().toLocaleLowerCase()); // e
console.log(userName.substring(-3, 1).toLowerCase()); // e
console.log(userName[userName.length - 3].toLowerCase().repeat(3)); // eee