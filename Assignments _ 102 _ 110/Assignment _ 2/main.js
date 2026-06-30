setTimeout(function () {
    let Button = document.createElement("button");
    let Element = document.createElement("div");
    let elementP = document.createElement("p");
    let elementH2 = document.createElement("h2");
    elementH2.textContent = "Welcome";
    elementP.textContent = "Welcome To Elzero Web School";
    Button.textContent = "X";

    Element.style.cssText = `
        border: solid 1px gray; 
        width: 500px;
        height: 120px;
        position: fixed;
        background - color: #212726a2;
        top:100px;
        left: 50%;
        transform: translateX(-50%)
        box - sizing: border - box;
        font - family: arial;
    `
    Button.style.cssText = `
        background-color: red;
        color: white;
        position:absolute;
        top: -10px;
        right: -10px;
        border:none;
        width: 30px;
        height:30px;
        border-radius: 50%;`;
    elementH2.style = "text-align: center"
    elementP.style = "text-align: center"

    Button.onclick = function () {
        Element.remove()
    }
    Element.appendChild(Button);
    Element.appendChild(elementH2);
    Element.appendChild(elementP);
    document.body.appendChild(Element);
}, 5000);