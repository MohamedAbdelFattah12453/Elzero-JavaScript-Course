let Element = document.createElement("div");
Element.innerHTML = 10;

function countDown() {
    Element.innerHTML -= 1;
    if (Element.innerHTML === "0") {
        clearInterval(counter)
    }
}
document.body.appendChild(Element);
let counter = setInterval(countDown, 1000);

