class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run () {
        return `Car Is Running Now`;
    }

    stop () {
        return `Car Is Stopped`;
    }
}

let carOne = new Car("MG", "2022", 420000);
let carTwo = new Car("Porsche", "2026", 5000000);
let carThree = new Car("Lamborghini", "2025", 4000000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());