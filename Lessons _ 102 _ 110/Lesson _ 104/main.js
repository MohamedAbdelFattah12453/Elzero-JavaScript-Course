/*
    BOM [Browser Object Model]
    - setTimeOut(Function, Timeout, Additional Params)
    - clearTimeout(Iddentifier)
*/

// setTimeout(function () {
//     console.log(`Msg`);
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//     console.log(`Iam Massage`);
// }

let counter = setTimeout(sayMsg, 3000);

function sayMsg(user, age) {
    console.log(`Iam Massage`);
}

let btn = document.querySelector("button");

btn.onclick = function () {
    clearTimeout(1);
};