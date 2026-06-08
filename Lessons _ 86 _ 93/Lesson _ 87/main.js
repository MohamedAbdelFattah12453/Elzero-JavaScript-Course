/*
    DOM [Get / Set Elements Content And Attributes]
    - InnerHTML
    - textContent
    - Change Attributes Directly
    - Change Atrributes With Method
    --- getAttribute
    --- setAttribute

    Search
    - innertext
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://Google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "Pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("herf", "https://Twitter.com");
myLink.setAttribute("title", "Twitter");