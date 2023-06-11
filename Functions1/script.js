let numbers = [10, 2, 3, 4, 7];

// Find the maximum value
let max = numbers[0]; // Assume the first element is the maximum

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

// Print the  array, maximum value
console.log("The content of the array is:", numbers);
console.log("The max value in the array is =", max);
