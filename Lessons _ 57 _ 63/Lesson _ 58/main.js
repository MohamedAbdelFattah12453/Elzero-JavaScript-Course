/*
    Function Advanced Examles
*/

function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App is Not Suitable For You`)
    } else {
        console.log(`Hello ${userName} Your Age is ${age}`);
    }
}

sayHello("Osama", 38);
sayHello("Ali", 40);
sayHello("Mohamed", 15);

function genarateYears(start, end, exculde) {
    for (let i = start; i <= end; i++) {
        if (i === exculde) {
            continue;
        }
        console.log(i)
    }
}

genarateYears(2011, 2026, 2019)