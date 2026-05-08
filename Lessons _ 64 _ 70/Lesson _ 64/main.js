/*
    Function
        Anonymous Function
        Calling Named Function Vs Anonymous Function
        Argument To Other Function
        Task Without Name
        SetTimeout
*/

let calculator = function (num1, num2) {
    return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
    console.log("Hello Mohamed");
}

document.getElementById("Show").onclick = sayHello

setTimeout(function ()  {
    console.log("Good");
}, 2000)