let Element = document.createElement("div");
Element.textContent = 10;

document.body.appendChild(Element);

function countDown() {
    Element.textContent -= 1;

    if (Element.textContent == 5) {
        window.open(
            "https://elzero.org",
            "_blank",
            "width=400,height=400"
        );
    }

    if (Element.textContent == 0) {
        clearInterval(counter);
    }
}

let counter = setInterval(countDown, 1000);
