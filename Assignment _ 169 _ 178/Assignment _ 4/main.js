let myRequest2 = new XMLHttpRequest();

myRequest2.open("GET", "articles.json");

myRequest2.send();

myRequest2.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let maindata = JSON.parse(this.responseText);

        for (let i = 0; i < maindata.length; i++) {
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");

            h2.textContent =  maindata[i].title 
            p1.textContent = maindata[i].content
            p2.textContent = `Author : ${maindata[i].author}`
            p3.textContent = `Category: ${maindata[i].category}`
            
            div.appendChild(h2);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);

            document.getElementById("data").appendChild(div);
        }
    }
}