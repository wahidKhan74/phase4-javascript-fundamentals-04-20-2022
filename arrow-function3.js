// one linner arrow function
let showDetails = () =>  console.log("Hello, Today is good day.");

showDetails();

let ageCalculator = (yearOfBirth) =>  console.log(`Hello, your age is ${2022-yearOfBirth}`);


ageCalculator(1990);
ageCalculator(1994);


// one linner arrow function with implicit return
let avgCalculate = (num1,num2) => (num1+num2) / 2;

let result = avgCalculate(1000,500);
console.log(result);

// IIFE with arrow function
(() => {
    console.log("IIFE Arrow function");
})();