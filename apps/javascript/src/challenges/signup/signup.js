// An event listener to the form for submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    const email = document.getElementById('email').value;
    const fullName = document.getElementById('full-name').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('pass').value;

    // Perform validation
    if (!email || !fullName || !dob || !password) {
        alert('Please fill in all fields');
    } else {
        // If validation passes
        alert('Signup successful!\nEmail: ' + email + '\nFull Name: ' + fullName + '\nDOB: ' + dob);
    }
});
