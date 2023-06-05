// Prompt the user to enter the first number
let firstNumber = prompt("Input the first number:");

// Prompt the user to enter the second number
let secondNumber = prompt("Input the second number:");

// Prompt the user to enter the third number
let thirdNumber = prompt("Input the third number:");

// Convert the user input strings to numbers
let num1 = parseFloat(firstNumber);
let num2 = parseFloat(secondNumber);
let num3 = parseFloat(thirdNumber);

// Check if all numbers are equal
if (num1 === num2 && num2 === num3) {
  console.log("All numbers are equal.");
}
// Check if all numbers are different
else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
  console.log("All numbers are different.");
}
// Numbers are neither all equal nor all different
else {
  console.log("Neither all are equal or different.");
}
