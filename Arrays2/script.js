//Find the avarage of an arry

let numbers = [20, 30, 25, 35, -16, 60, -100];
let sum = 0;

// Iterate through the array and add each element to the sum
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// Calculate the average by dividing the sum by the number of elements
let average = sum / numbers.length;

// Print the average
console.log("Average value of the array elements is:", average.toFixed(1));
