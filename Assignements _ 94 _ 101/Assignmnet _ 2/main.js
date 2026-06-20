let Addinput = document.querySelector(".classes-to-add");
let Removeinput = document.querySelector(".classes-to-remove");
let currentClasses = document.querySelector(".element.current");
let classesContiner = document.querySelector(".classes-list div");


Addinput.addEventListener("blur", function () {
    if (this.value.trim() !== "") {
        let addValues = this.value.toLowerCase().trim().split(" ");
        for (let i = 0; i < addValues.length; i++) {
            currentClasses.classList.add(addValues[i]);
        }
        this.value = "";
        showClasses();
    }
});

// 2. حدث الحذف
Removeinput.addEventListener("blur", function () {
    if (this.value.trim() !== "") {
        let valuesRemove = this.value.toLowerCase().trim().split(" ");
        for (let i = 0; i < valuesRemove.length; i++) {
            currentClasses.classList.remove(valuesRemove[i]);
        }
        this.value = "";
        showClasses(); 
    }
});

function showClasses() {
    classesContiner.innerHTML = ""; 

    let sortedClasees = Array.from(currentClasses.classList).sort();

    if (sortedClasees.length === 0) {
        classesContiner.innerHTML = "No Classes To Show";
    } else {

        for (let i = 0; i < sortedClasees.length; i++) {
            let mySpan = document.createElement("span");
            mySpan.textContent = sortedClasees[i];
            classesContiner.appendChild(mySpan);
        }
    }
}


showClasses();