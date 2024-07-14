const text = document.querySelector('.second-text');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const speed = document.querySelector('.speedRange');
const values = ['Student', 'Developer', 'Writer'];

speed.default = 200; // Set the default value of slider
let typingSpeed = 200; // Initial value of typing speed

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function displayTextWithTypingEffect(element, value) {
  await delay(typingSpeed);
  for (let i = 0; i < value.length; i++) {
    element.textContent += value.charAt(i);
    await delay(typingSpeed);
  }

  await delay(typingSpeed);
  for (let i = 0; i < value.length; i++) {
    element.textContent = value.substring(0, value.length - 1 - i);
    await delay(typingSpeed);
  }
}

async function textLoad() {
  for (const value of values) {
    await displayTextWithTypingEffect(text, value);
  }

  textLoad();
}

textLoad();

button.addEventListener('click', () => {
  if (input.value) {
    values.push(input.value); //On clicking submit, the value of input will be added to the values array
    input.value = '';
  }
});

speed.addEventListener('change', () => {
  typingSpeed = speed.value; // This is listening for a change in the slider, once it's changed it will update global variable duration
});
