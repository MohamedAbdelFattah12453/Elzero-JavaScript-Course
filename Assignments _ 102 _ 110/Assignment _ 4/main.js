let Element = document.createElement("div");
Element.innerHTML = 10;

function countDown() {
    Element.innerHTML -= 1;
    if (Element.innerHTML === "0") {
        location.href = "https://elzero.org";
    }
}
document.body.appendChild(Element);
let counter = setInterval(countDown, 1000);

