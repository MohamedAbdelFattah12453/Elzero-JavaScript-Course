function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let Names = zName.split(" ");
        return `${Names[0]} ${Names[1][0].toUpperCase()}.`;
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        let Ages = parseInt(zAge);
        return `Your Age Is ${Ages}`
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        let Countres = zCountry.slice(0, 2);
        return `You Live In ${Countres.toUpperCase()}`;
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY