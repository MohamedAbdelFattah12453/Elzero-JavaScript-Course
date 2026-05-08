let Name;
let Age;
let Status;

function checkStatus(...Data) {
    for (let i = 0; i < Data.length; i++) {
        if ( typeof Data[i] === "string") {
            Name = Data[i];
        } else if (typeof Data[i] === "number") {
            Age = Data[i];
        } else if ( typeof Data[i] === "boolean") {
            Status = Data[i];
        } else {
            console.log("UnKnown")
        }
    }
    console.log(`Hello ${Name} , Your Age Is ${Age} You Are ${Status === true ? "Available For Hire" :"Not Available For Hire"}`)
}

checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
