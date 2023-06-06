// Prompt the user to input a number
let number = prompt("Input a number:");

// Convert the user input string to a number
let num = parseInt(number);

// Iterate from 1 to 10
for (let i = 1; i <= 10; i++) {
  // Calculate the product
  let product = num * i;

  // Print the multiplication table entry
  console.log(num + " x " + i + " = " + product);
}
