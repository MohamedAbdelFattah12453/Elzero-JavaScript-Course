
let Form = document.querySelector(".form");
let Div = document.querySelector(".tasks");
let input = document.querySelector(".input");
let Button = document.querySelector(".add");

let tasks = [];

// 1️⃣ getDataFromLocalStorage

function getData() {
    let getData = window.localStorage.getItem("tasks");
    if (getData !== null) {
        tasks = JSON.parse(getData);
    }
}

getData();

// 2️⃣ AddData()

Button.addEventListener("click", function (e) {
    e.preventDefault();

    if (input.value !== "") {

        let Mission = {
            id: Date.now(),
            title: input.value,
            completed: false,
            createdAt: new Date().toLocaleString(),
        };

        tasks.push(Mission);

        saveData();

        renderData();

        input.value = "";
    }
});

// 3️⃣ saveDataToLocalStorage()

function saveData() {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 4️⃣ renderData()

function renderData() {

    Div.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let Duty = tasks[i];

        let newDiv = document.createElement("div");
        let newText = document.createTextNode(Duty.title);

        let newDate = document.createElement("small");
        newDate.textContent = Duty.createdAt;
        newDate.className = "date";

        let newButton = document.createElement("button");
        let buttonText = document.createTextNode("Delete");

        newDiv.dataset.id = Duty.id;

        newDiv.className = "task";
        newButton.className = "del";

        if (Duty.completed) {
            newDiv.classList.add("done");
        }

        newButton.appendChild(buttonText);

        newDiv.appendChild(newText);
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(newDate);
        newDiv.appendChild(newButton);

        Div.appendChild(newDiv);

    }
}

renderData();

// 5️⃣ DeleteTask()

Div.addEventListener("click", function (e) {

    if (e.target.classList.contains("del")) {

        let taskId = Number(e.target.parentElement.dataset.id);

        tasks = tasks.filter(task => task.id !== taskId);

        saveData();
        renderData();
    }
});

