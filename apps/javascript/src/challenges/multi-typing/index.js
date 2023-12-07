const text = document.querySelector('.second-text');
const values = ['Student', 'Developer', 'Writer'];

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function displayTextWithTypingEffect(element, value, duration = 200) {
  await delay(duration);
  for (let i = 0; i < value.length; i++) {
    element.textContent += value.charAt(i);
    await delay(duration);
  }

  await delay(duration);
  for (let i = 0; i < value.length; i++) {
    element.textContent = value.substring(0, value.length - 1 - i);
    await delay(duration);
  }
}

async function textLoad() {
  for (const value of values) {
    await displayTextWithTypingEffect(text, value);
  }

  textLoad();
}

textLoad();
