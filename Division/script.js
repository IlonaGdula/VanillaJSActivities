// Prompt the user to enter the first number
let firstNumber = prompt("Input the first number:");

// Prompt the user to enter the second number
let secondNumber = prompt("Input the second number:");

// Convert the user input strings to numbers
let num1 = parseFloat(firstNumber);
let num2 = parseFloat(secondNumber);

// Perform the division
let division = num1 / num2;

// Create a new paragraph element to display the result
let resultParagraph = document.createElement("p");
resultParagraph.textContent =
  "The division of the first number and the second number is: " + division;

// Append the paragraph element to the body of the HTML document
document.body.appendChild(resultParagraph);
