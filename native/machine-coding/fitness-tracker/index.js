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
    const workout = document.getElementById("workout").value;
    const duration = document.getElementById("duration").value;

    const errorMessage = document.getElementById("error-message");
    
    if (workout && duration) {
        // Clear any existing error message
        errorMessage.textContent = "";

        const workoutsList = document.getElementById("workouts");
        const listItem = document.createElement("li");
        listItem.textContent = `${workout} - ${duration} minutes`;

        // Add a "Delete" button to each workout item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function () {
            // Remove the workout item when the "Delete" button is clicked
            workoutsList.removeChild(listItem);
        };
        listItem.appendChild(deleteButton);

        workoutsList.appendChild(listItem);

        // Clear input fields after adding a workout
        document.getElementById("workout").value = "";
        document.getElementById("duration").value = "";
    } else {
        // Show an error message if either field is empty
        errorMessage.textContent = "Please fill in both fields.";
    }
}