const getData = (apilink) => {
return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.onload = function () {
    if (this.status === 200) {
        resolve(JSON.parse(this.responseText));
    } else {
        reject(Error("No Data Found"));
        }
    };
    req.open("GET", apilink);
    req.send();
    });
};

getData("object.json").then(
    (result) => {
        let mainData = result.slice(0, 5);
        for (let i = 0; i < mainData.length; i++) {
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");

            h3.textContent = result[i].title;
            p.textContent = result[i].description;

            div.appendChild(h3);
            div.appendChild(p);

            document.body.appendChild(div);
        }
    }
)