// ============================================
// My Solutions for Regular Expressions Practice
// Date: 2026
// Author: Mohamed Abdel Fattah
// ============================================

// --------------------------------------------
// Task 1: Extract prices only (Must end with $)
// --------------------------------------------
let text1 = "Order_100 cost 50$ and Order_200 cost 150$";

// tried \d+\W first but it matched spaces too!
// Fix: Escaping the dollar sign directly
let answer1 = /\d+\$/g;

console.log(text1.match(answer1)); // ['50$', '150$']

// --------------------------------------------
// Task 2: Match specific codes (1 Uppercase + 3 or 4 digits)
// --------------------------------------------
let codes = "A12 B1234 C123 D12345";

// Using \b at both ends to avoid taking partial numbers like D1234 from D12345
let answer2 = /\b[A-Z]\d{3,4}\b/g;

console.log(codes.match(answer2)); // ['B1234', 'C123']

// --------------------------------------------
// Task 3: Filter valid emails (.com, .org, .net only)
// --------------------------------------------
let emails ="user1@gmail.com admin@site.org test_user@com_invalid info@yahoo.net";

// [a-z]{3}\b makes sure we only match 3-letter extensions and ignore com_invalid
let answer3 = /\w+@\w+\.[a-z]{3}\b/g;

console.log(emails.match(answer3)); // ['user1@gmail.com', 'admin@site.org', 'info@yahoo.net']
