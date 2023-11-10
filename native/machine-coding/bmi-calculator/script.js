const form = document.getElementById('bmiForm');

// Adds event listener to the form for the submit event
form.addEventListener('submit', function (event) {
  // Prevents the default form submission behavior
  event.preventDefault();

  // Get the input values
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  // Checks if height and weight are valid numbers
  if (!isNaN(height) && !isNaN(weight)) {
    // Calculate BMI
    const bmi = calculateBMI(height, weight);

    // Display BMI result
    displayBMI(bmi);
  } else {
    alert('Please enter valid height and weight values.');
  }
});

// Function to calculate BMI
function calculateBMI(height, weight) {
  // BMI Formula: weight (kg) / (height (m) * height (m))
  const heightInMeters = height / 100; // Convert height to meters
  return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

// Function to display BMI
function displayBMI(bmi) {
  const resultContainer = document.getElementById('result');
  const bmiValueElement = document.getElementById('bmiValue');

  // Display BMI value
  bmiValueElement.textContent = bmi;

  // Show the result container
  resultContainer.style.display = 'block';
}
