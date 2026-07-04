let sizeSelect = document.querySelector("#sizeSelect");
let fontSelect = document.querySelector("#fontSelect");
let colorSelect = document.querySelector("#colorSelect");

function generateSizeOptions() {
    for (let i = 16; i <= 30; i++) {
        let newOption = document.createElement("option");
        newOption.value = `${i}px`
        newOption.textContent = newOption.value;
        sizeSelect.appendChild(newOption);
    }
}

generateSizeOptions();


let savedFont = window.localStorage.getItem("Font");

if (savedFont) {
    document.body.style.fontFamily = savedFont;
    fontSelect.value = savedFont;
}

let savedColor = window.localStorage.getItem("Color");

if (savedColor) {
    document.body.style.color = savedColor;
    colorSelect.value = savedColor;
}


let savedSize = window.localStorage.getItem("Size");

if (savedSize) {
    document.body.style.fontSize = savedSize;
    sizeSelect.value = savedSize;
}

// FontSelect

fontSelect.addEventListener("change", function () {
    console.log(fontSelect.value);
    document.body.style.fontFamily = fontSelect.value;

    window.localStorage.setItem("Font", fontSelect.value);

});

// ColorSelect

colorSelect.addEventListener("change", function () {
    console.log(colorSelect.value);
    document.body.style.color = colorSelect.value;

    window.localStorage.setItem("Color", colorSelect.value);
});

// SizeSelect

sizeSelect.addEventListener("change", function () {
    console.log(sizeSelect.value);

    document.body.style.fontSize = sizeSelect.value;

    window.localStorage.setItem("Size", sizeSelect.value);
});


