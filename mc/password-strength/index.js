const password = document.getElementById('password');
const progressBar = document.getElementById('progressBar');

password.addEventListener('input', function () {
  // check if password contains at least one number
  const hasNumber = /\d/;
  // check if password contains at least one uppercase letter
  const hasUpperCase = /[A-Z]/;
  // check if password contains at least one lowercase letter
  const hasLowerCase = /[a-z]/;
  // check if password contains at least one special character
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  const value = password.value;

  // check strength of the password
  let strength = Math.min(6, Math.floor(value.length / 3));
  strength +=
    value.length > 3
      ? hasNumber.test(value) + hasUpperCase.test(value) + hasLowerCase.test(value) + hasSpecial.test(value)
      : 0;

  progressBar.style.width = strength * 10 + '%';
  if (strength > 8) {
    progressBar.style.backgroundColor = 'green';
  } else if (strength > 5) {
    progressBar.style.backgroundColor = 'orange';
  } else {
    progressBar.style.backgroundColor = 'red';
  }
});
