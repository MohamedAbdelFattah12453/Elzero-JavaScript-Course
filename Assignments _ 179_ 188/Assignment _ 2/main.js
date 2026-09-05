fetch("object.json")
    .then((response) => response.json())
    .then((result) => {
            let mainData = result.slice(0, 5);
        for (let i = 0; i < mainData.length; i++) {
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");

            h3.textContent = mainData[i].title;
            p.textContent = mainData[i].description;

            div.appendChild(h3);
            div.appendChild(p);

            document.body.appendChild(div);
        }
    })