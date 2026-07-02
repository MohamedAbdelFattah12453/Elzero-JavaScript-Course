/*
    BOM [Browser Object Model]
    Local Storage Practice
*/
let elementDiv = document.querySelector(".experiment");
let lis = document.querySelectorAll("ul li");

let myColor = localStorage.getItem("color");

// Check If There Is A Saved Color
if (myColor !== null) {
    elementDiv.style.backgroundColor = myColor;

    lis.forEach((li) => {
        if (li.getAttribute("data-color") === myColor) {
            li.classList.add("active");
        } else {
            li.classList.remove("active");
        }
    });
}

// Add Click Event To All Lis
lis.forEach((li) => {

    li.addEventListener("click", function () {

        let attribute = this.getAttribute("data-color");

        // Change Div Background
        elementDiv.style.backgroundColor = attribute;

        // Save Color In Local Storage
        localStorage.setItem("color", attribute);

        // Remove Active Class From All Lis
        lis.forEach((li) => {
            li.classList.remove("active");
        });

        // Add Active Class To Current Li
        this.classList.add("active");

    });

});
