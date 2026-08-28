/*
    To UnderStand Ajax, Fetch, Promises

    Pyramid Od Doom || Callback Hell

    - What Is Callback
    - Callback Hell Example

    What Is Callback
    - A Function That Is Passed Into Another One As An Argument To Be Executed Later
    - Function To Handle Photos
    --- [1] Download Photo From URL
    --- [2] Resize Photo
    --- [3] Add Logo To The Photo
    --- [4] Show The Photo In Website
*/

function makeItRed(e) {
    e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamCallback() {
    console.log("Iam Callback Function")
}

setTimeout(iamCallback, 2000);

setTimeout(() => {
    console.log(" Download Photo From URL");
    setTimeout(() => {
        console.log(" Resize Photo");
    }, 1000);
    setTimeout(() => {
        console.log("Add Logo To The Photo");
    }, 1000);
    setTimeout(() => {
        console.log("Show The Photo In Website");
    }, 1000);
}, 1000);