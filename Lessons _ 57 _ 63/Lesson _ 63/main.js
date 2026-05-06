/*
    Function - Random Argument Challenge
    ====================================
    Create Fuction showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    String => Name
    Number => Age
    Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend ON Data Types
    Use Ternary Conditional Operator
*/
let Name;
let Age;
let Status;

function showDetails(...Data) { 
    for (let i = 0; i < Data.length; i++) {
    typeof Data[i] === "string" ? Name = Data[i] :
        typeof Data[i] === "number" ? Age = Data[i] :
            typeof Data[i] === "boolean" ? Status = Data[i] :
                "UnKnown";
    }
    console.log(`Hello ${Name} Your Age Is ${Age} You Are ${Status === true ? "Available For Hire" : "Not Available For Hire"}`);
}

showDetails("Mohamed", 15, true);
showDetails(15, "Mohamed", true);
showDetails(true, 15, "Mohamed");
showDetails(false, "Mohamed", 15);