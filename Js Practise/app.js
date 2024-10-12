// 2. Control Structures
// Conditional statements (if, else, switch)
// Loops (for, while, do...while)
// 3. Functions
// Function declarations and expressions
// Arrow functions
// Understanding scope (global vs. local)
// 4. Objects and Arrays
// Creating and manipulating objects
// Array methods (push, pop, shift, unshift, splice)
// Higher-order array methods (.map(), .filter(), .reduce())
// 5. DOM Manipulation
// Selecting elements (getElementById, querySelector)
// Modifying elements (innerHTML, classList, styles)
// Event handling (addEventListener)
// 6. Asynchronous JavaScript
// Understanding the call stack and event loop
// Promises (then, catch)
// Async/await syntax
// Making API calls with fetch
// 7. Error Handling
// Try/catch blocks
// Common debugging techniques (console.log, browser dev tools)
// 8. ES6+ Features
// Destructuring objects and arrays
// Template literals
// Modules (import/export)
// 9. Introduction to Frameworks/Libraries
// Basics of React, Vue.js, or Angular
// Understanding the component-based architecture
// 10. Version Control/Git
// Basic Git commands (clone, commit, push, pull)
// Understanding branches and merges
// 11. Build Tools and Package Managers
// Introduction to npm/yarn
// Setting up a project with Webpack or Parcel



// 2. Control Structures
// Conditional statements (if, else, switch)

// Age Check: Write a program that checks if a person is an adult (18 years or older). Log "You are an adult." or "You are not an adult." based on their age.

// let user = 12
// let age = 18;
// if(user < 18){
//   console.log("You are no an adult.");
// }else{
//     console.log("You are  adult.");
// }


// let userInput = +prompt('Enter your number')
// let num = 2;
// if(userInput % num == 0 ){
//     console.log("Even Number");
// }else{
//     console.log("Odd Number")
// }

// Temperature Check: Write a program that checks the temperature in degrees Celsius and logs "It's hot!" if the temperature is above 30, "It's warm!" if it's between 20 and 30, and "It's cold!" if it's below 20.

// let userVal = +prompt("Enter your temp");
// if(userVal < 30){
//     console.log("it is cold");
// }else if(userVal > 30){
//     console.log("It is is Warm");
// }else{
//     console.log("Enter correct temperature");
// }

// Grade Checker: Write a program that takes a grade (0-100) as input and logs "You passed!" for grades 60 and above and "You failed!" for grades below 60.


// let StudentMarks = +prompt('Enter your marks');
// if(StudentMarks >=60 ){
//     console.log("You passed!");
// }else if(StudentMarks < 60 ){
//     console.log("You failed!");
// }else{
//     console.log("Enter correct number");
// }

// Password Validator: Create a simple password validator that checks if the password is at least 8 characters long. Log "Password is valid." or "Password is too short."

// let userpass = +prompt("pas");
// let password = 8;
// if( userpass > password){
//     console.log("storng");
// }else if(userpass < password){
//     console.log("short")
// }
// else{
//     console.log("strong")
// }

// Traffic Light: Write a program that checks the color of a traffic light (red, yellow, green) and logs "Stop!" for red, "Caution!" for yellow, and "Go!" for green.
// Use toLowerCase() and toUpperCase() for string manipulation to ensure consistent comparisons.
// let trafficLight = prompt("Enter your traffic light");
// if(trafficLight.toLowerCase() === "red"){
//     console.log("Stop");
// }else if(trafficLight.toLowerCase() === "yellow"){
//     console.log("Caution");
// }else if(trafficLight.toLowerCase() === "green"){
//     console.log("Go");
// }else{
//     console.log("Enter Correct Color")
// }

// Multiple Conditions: Write a program that takes a number and checks if it is positive, negative, or zero. Log "The number is positive.", "The number is negative.", or "The number is zero."

// let  userNum = +prompt("Enter your number");
// let num = 2;
// if(userNum % num == 0){
//     console.log("The number is postiove");
// }else{
//     console.log("The number is nagative");
// }









// Day of the Week: Create a program that takes a number (1-7) and logs the corresponding day of the week. For example, 1 for "Monday", 2 for "Tuesday", etc. Log "Invalid input." for numbers outside this range.

// BMI Calculator: Write a program that calculates Body Mass Index (BMI) from weight and height. Log "Underweight", "Normal weight", "Overweight", or "Obesity" based on the calculated BMI.

// Discount Eligibility: Create a program that checks if a customer is eligible for a discount based on their membership status (member or non-member) and purchase amount (greater than $100). Log "Eligible for discount." or "Not eligible for discount."