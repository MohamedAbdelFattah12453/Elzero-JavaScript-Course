let Elements = document.querySelectorAll("img");
let Elements2 = document.getElementsByTagName("img");

Elements.forEach(function (img) {
    if (img.hasAttribute("alt")) {
        img.setAttribute("alt", "Old");
    } else {
        img.setAttribute("alt", "Elzero New");
    }
})