let Elements = document.querySelectorAll("div, span, p, article, section");

Elements.forEach(element => {
    element.addEventListener("click", function () {
        console.log(`This is ${element.tagName.toLowerCase()}`);
    });
});
