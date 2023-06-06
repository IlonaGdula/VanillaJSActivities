let numbers = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];

// Find the maximum value
let max = numbers[0]; // Assume the first element is the maximum

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

// Find the minimum value
let min = numbers[0]; // Assume the first element is the minimum

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

// Print the original array, maximum value, and minimum value
console.log("Original Array:", numbers);
console.log("Maximum value for the above array =", max);
console.log("Minimum value for the above array =", min);
