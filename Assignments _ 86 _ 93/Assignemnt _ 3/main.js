let myInput = document.querySelector("input");
let Element = document.querySelector(".result");

myInput.oninput = function () {
    let finalprice = (myInput.value * 51.724).toFixed(2);
    Element.innerHTML = `{${myInput.value}} USD Dollar = {${finalprice}} Egyptian Pound`;
}

