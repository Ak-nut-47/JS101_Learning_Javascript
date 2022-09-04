let birthYear = 1995;
let currentYear = 2022;
let age = currentYear - birthYear;

(age >= 13 && age <= 19) ? console.log("Teenage")
  : (age >= 20 && age <= 29) ? console.log("Twenties")
    : console.log("Not Available");