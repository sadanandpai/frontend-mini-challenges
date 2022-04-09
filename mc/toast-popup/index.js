const toastData = "Hello, world";
const showToastButton = document.getElementById("showToast");
const toastContainer = document.getElementById("toastContainer");
const duration = 3000;

let timeoutId;
showToastButton.addEventListener("click", () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  const position = document.querySelector('input[name="position"]:checked').value;
  toastContainer.setAttribute("position", position);
  toastContainer.style.display = "block";
  toastContainer.textContent = toastData;

  timeoutId = setTimeout(() => {
    toastContainer.style.display = "none";
  }, duration);
});
