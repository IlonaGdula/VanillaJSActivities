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

// check if numbers are in increasing order
if (num1 < num2 < num3) {
  console.log("Increasing order");
}
// check if decreasing order
else if (num1 > num2 > num3) {
  console.log("Decreasing order");
}
// if neither
else {
  console.log("Neither increasing or decreasing order");
}
