function calculateSphereVolume(radius) {
  // Check if the radius is a positive number
  if (typeof radius !== "number" || radius <= 0) {
    throw new Error("Radius must be a positive number.");
  }

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  return volume;
}

// Prompt the user for the radius of the sphere
var userInput = prompt("Enter the radius of the sphere:");
var radius = parseFloat(userInput);

// Calculate the volume using the function
try {
  var volume = calculateSphereVolume(radius);
  console.log("Volume of the sphere:", volume);
} catch (error) {
  console.log("Error:", error.message);
}
