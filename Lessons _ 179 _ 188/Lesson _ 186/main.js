/*
    Await
    - Await Works Only Inside Asyns Functions
    - Await Make JavaScript Wzit For The Promise Result
    - Await It More Elegent Syntax Of Getting Promise Result
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Iam The Bad Promise");
        reject(Error("Iam The Bad Promise"));
    }, 3000)
});

async function readData() {
    console.log("Before Promise");
    // myPromise.then((resolvedValue) => console.log(resolvedValue));
    // console.log(await myPromise);
    console.log(await myPromise.catch((err) => err));
    console.log("After Promise");
}

readData();