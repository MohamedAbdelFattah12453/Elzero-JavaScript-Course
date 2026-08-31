/*
    Promise
    - All
    - All
    - Race
*/

const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Iam The First Promise");
    }, 500)
});


const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Iam The Second Promise");
    }, 1000)
});


const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Iam The Third Promise");
    }, 2000)
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
// )


// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
// )

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
)