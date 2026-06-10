/*
    DOM [Events]
    - Use Events On HTML
    - Use Events On JS
    --- onclick
    --- oncontextmenu
    --- onmouseenter
    --- onmouseleave

    --- onload
    --- onscroll
    --- onresize

    --- onfocus
    --- onblur
    --- onsubmit
*/

let mybtn = document.getElementById("btn");

mybtn.onmouseleave = function () {
    console.log("Clicked");
};

window.onresize = function () {
    console.log("Scroll")
}