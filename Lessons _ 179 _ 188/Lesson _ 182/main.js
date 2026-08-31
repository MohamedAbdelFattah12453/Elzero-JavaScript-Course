/*
    Promise And XHR
*/

const getData = (apilink) => {
    return new Promise((resolve, reject) => {

    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
    } else {
        reject(Error("No Data Found"))
    }
};

myRequest.open("GET", "https://api.github.com/users/MohamedAbdelFattah12453/repos");
myRequest.send();
    })
}

getData("https://api.github.com/users/MohamedAbdelFattah12453/repos").then(
    (result) => {
        result.length = 2;
        return result;
    }).then((result) => console.log(result[0].name)).catch(
        (reject) => console.log(reject)
    );


// "https://api.github.com/users/MohamedAbdelFattah12453/repos"

// let jsData = JSON.parse(this.responseText);
// for (let i = 0; i < jsData.length; i++) {
//     let div = document.createElement("div");
//     let repoName = document.createTextNode(jsData[i].name);
//     div.appendChild(repoName);
//     document.body.appendChild(div);
// }