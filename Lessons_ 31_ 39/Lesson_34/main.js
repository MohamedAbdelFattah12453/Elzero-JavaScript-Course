/*
    Nested If
*/
let price = 100;
let discount = false;
let discountAmount = 40;
let country = "Egypt";
let student = true;

if (discount === true && student === true) {

    price -= discountAmount; // price = price - discountAmount

} else if (discount === true && student === true) { 

    if (student === true) {

        price -= discountAmount + 30;

    } else { 

        price -= discountAmount + 10;

    }

} else {

    price -= 10;

}