/*
    JSON
    - JSON.parse => Convert Text Date To JS Object
    - JSON.stringify => Convert JS Object To JSON
*/

const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39 }';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);

console.log(typeof myJsObject);
console.log(myJsObject);

myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);