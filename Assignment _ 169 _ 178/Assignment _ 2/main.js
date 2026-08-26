let req = new XMLHttpRequest();

req.open("GET", "articles.json");

req.send();

req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log("Data Loaded");
    }
}
