// Code One
// This Code Is Not Working Because he element with ID 'el' is not loaded yet. The browser parses the HTML from top to bottom, and 
// the script is executed before the element exists in the DOM."
document.getElementById("el").style.color = "red";