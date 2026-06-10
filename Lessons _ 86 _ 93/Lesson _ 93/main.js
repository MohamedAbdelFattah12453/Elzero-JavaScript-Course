/*
    DOM [Events]
    - Validate Form Practise
    - Prevent Default
*/

let userInput = document.querySelector("[name= 'username']");
let ageInput = document.querySelector("[name= 'age']");

console.log(userInput)

document.forms[0].onsubmit = function (e) {
    let uservalid = false;
    let agevalid = false;

    console.log(userInput.value);
    console.log(userInput.value.length);

    if (userInput.value !== "" && userInput.value.length <= 10) {
        uservalid = true;
    }

    if (ageInput.value !== "") {
        agevalid = true;
}
    if (uservalid === false || agevalid === false) {
        e.preventDefault();
    }
}

document.links[0].onclick = function (event) {
    console.log(event);
    event.preventDefault();
};