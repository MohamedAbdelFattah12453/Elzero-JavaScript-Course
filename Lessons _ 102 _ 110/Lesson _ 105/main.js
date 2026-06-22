/*
    BOM [Browser Object Model]
    - serInterval(Function, Millseconds, Additional Params)
    - clearInterval(Identifier)
*/

// setInterval(function () {
//     console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//     console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Mohamed", 15);

// function sayMsg(user, age) {
//     console.log(`Iam Message For ${user} His Age Is: ${age}`)
// }

let div = document.querySelector("div");

function countDown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(Counter);
    }
}

let Counter = setInterval(countDown, 1000);