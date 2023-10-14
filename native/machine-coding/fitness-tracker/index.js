const darkModeToggle = document.getElementById('dark-mode-toggle');
const addButton = document.getElementById('add-button');
const workoutsList = document.getElementById('workouts');
const workoutInput = document.getElementById('workout');
const durationInput = document.getElementById('duration');
const errorMessage = document.getElementById('error-message');

darkModeToggle.addEventListener('click', toggleDarkMode);
addButton.addEventListener('click', addWorkout);

function toggleDarkMode() {
  const body = document.body;
  const container = document.querySelector('.container');
  const h1 = document.querySelector('h1');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    container.classList.remove('dark-mode');
    h1.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
    container.classList.add('dark-mode');
    h1.classList.add('dark-mode');
  }
}

function addWorkout() {
  const workout = workoutInput.value;
  const duration = durationInput.value;

  if (workout && duration) {
    // Clear any existing error message
    errorMessage.textContent = '';

    const listItem = document.createElement('li');
    listItem.textContent = `${workout} - ${duration} minutes`;

    // Add a "Delete" button to each workout item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    deleteButton.addEventListener('click', function () {
      // Remove the workout item when the "Delete" button is clicked
      workoutsList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    workoutsList.appendChild(listItem);

    // Clear input fields after adding a workout
    workoutInput.value = '';
    durationInput.value = '';
  } else {
    // Show an error message if either field is empty
    errorMessage.textContent = 'Please fill in both fields.';
  }
}
