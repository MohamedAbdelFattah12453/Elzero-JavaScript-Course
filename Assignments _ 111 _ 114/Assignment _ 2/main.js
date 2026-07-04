let nameInput = document.querySelector("#nameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let Countries = document.querySelector("#Countries");

// NameInput
nameInput.addEventListener("input", function () {
    console.log(nameInput.value);
    window.sessionStorage.setItem("Name", nameInput.value);
});

//EmailInput
emailInput.addEventListener("input", function () {
    console.log(emailInput.value);
    window.sessionStorage.setItem("Email", emailInput.value);
});

// PasswordInput
passwordInput.addEventListener("input", function () {
    console.log(passwordInput.value);
    window.sessionStorage.setItem("Password", passwordInput.value);
});



Countries.addEventListener("change", function () {
    console.log(Countries.value);
    window.sessionStorage.setItem("Country", Countries.value);
});

let savedName = window.sessionStorage.getItem("Name");

if (savedName) {
    nameInput.value = savedName;
}

let savedEmail = window.sessionStorage.getItem("Email");

if (savedEmail) {
    emailInput.value = savedEmail;
}

let savedPassword = window.sessionStorage.getItem("Password");

if (savedPassword) {
    passwordInput.value = savedPassword;
}

let savedCountries = window.sessionStorage.getItem("Country");

if (savedCountries) {
    Countries.value = savedCountries;
}