let elementP = document.querySelector("p");
let elementDiv = document.querySelector(".our-element");
let Element1 = document.createElement("div");
elementP.remove();

Element1.textContent = "Start";
Element1.className = "start";
Element1.setAttribute("title", "Start Element");
Element1.setAttribute("data-value", "Start");

elementDiv.before(Element1);

let Element2 = document.createElement("div");

Element2.textContent = "End";

Element2.className = "end";
Element2.setAttribute("title", "End Element");
Element2.setAttribute("data-value", "End");

elementDiv.after(Element2)