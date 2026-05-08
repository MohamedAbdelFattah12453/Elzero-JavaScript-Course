function ageInTime(theAge) {
    if (theAge > 100 || theAge < 10) {
        console.log(`Age Out Of Range`);
        return;
    }

    let Months = theAge * 12;
    let Weeks = theAge * 52;
    let Days = theAge * 365;
    let Hours = Days * 24;
    let Mintues = Hours * 60;
    let Seconds = Mintues * 60; 


    console.log(`${Months} Months`);
    console.log(`${Weeks} Weeks`);
    console.log(`${Days} Days`);
    console.log(`${Hours} Hours`);
    console.log(`${Mintues} Minutes`);
    console.log(`${Seconds} Seconds `);
}

ageInTime(110); // Age Out Of Range
ageInTime(41); // Months Example => 456 Months