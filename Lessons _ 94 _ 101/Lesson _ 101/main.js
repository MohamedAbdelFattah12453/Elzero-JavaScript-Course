document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;"
let header = document.createElement("header");
let divHeader = document.createElement("div");
let myUl = document.createElement("ul");
let divText = document.createTextNode("Elzero");
header.className = "website-head";
divHeader.className = "logo";
myUl.className = "menu";
myUl.innerHTML = `
<li>Home</li>
<li>About</li>
<li>Service</li>
<li>Contact</li>
`

header.style.cssText = "display: flex; padding: 20px; background-color:rgb(255, 255, 255); justify-content: space-between; align-items: center;"
divHeader.style.cssText = "font-weight: bold; color: rgb(37, 175, 69, 110); font-size: 26px";
myUl.style.cssText = "padding: 0px; margin: 0px; display:flex; list-style:none; gap: 20px";

header.appendChild(divHeader).appendChild(divText);
header.appendChild(myUl);


let bigDiv = document.createElement("div");
bigDiv.className = "content";

for (let i = 0; i < 15; i++) {
    let myDiv = document.createElement("div");
    let span = document.createElement("span");
    let spanText = document.createTextNode("Product");
    myDiv.className = "product";

    // Css Formatting
    bigDiv.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";  
    myDiv.style.cssText = "padding: 20px; background-color: rgb(225, 225, 225); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
    span.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px";
    
    span.textContent = i + 1;
    bigDiv.appendChild(myDiv);
    myDiv.appendChild(span)
    myDiv.appendChild(spanText);
}

let Footer = document.createElement("footer");
let footerText = document.createTextNode("Copyright 2026");

Footer.style.cssText = "Background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);"
Footer.appendChild(footerText);

document.body.appendChild(header);
document.body.appendChild(bigDiv);
document.body.appendChild(Footer);