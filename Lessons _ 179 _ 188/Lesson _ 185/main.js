/*
    Async
    - Acync Before Function Mean This Function Return A Promise
    - Async And Adwait Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//     return new Promise((res, rej) => {
//         let users = []
//         if (users.length > 0) {
//             res("Users Found");
//         } else {
//             rej("No Users Found");
//         }
//     });
// }

// getData().then(
//     (resolveValue) => console.log(resolveValue),
//     (rejectValue) => console.log("Rejected " + rejectValue)
// );

// function getData() {
//     let users = ["Osama"];
//     if (users.length > 0) {
//         return Promise.resolve("User Found");
//     } else {
//         return Promise.reject("No Users Found");
//     }
// }

// getData().then(
//     (resolveValue) => console.log(resolveValue),
//     (rejectValue) => console.log("Rejected " + rejectValue),
// );


async function getData() {
    let users = [];
    if (users.length > 0) {
        return "User Found";
    } else {
        throw new Error("No User Found");
    }
}

console.log(getData());

getData().then(
    (resolveValue) => console.log(resolveValue),
    (rejectValue) => console.log("Rejected " + rejectValue),
);
