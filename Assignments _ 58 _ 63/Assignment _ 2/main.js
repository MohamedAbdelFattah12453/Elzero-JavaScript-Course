function calculate(fristNum, SecondNum, Operation) {
    if (SecondNum === undefined) {
        return console.log(`${fristNum} Second Number Not Found`);
    }
    if (Operation === "subtract") {
        console.log(fristNum - SecondNum);
    } else if (Operation === "multiply") {
        console.log(fristNum * SecondNum);
    } else {
        console.log(fristNum + SecondNum);
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600