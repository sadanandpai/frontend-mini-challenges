const text = document.querySelector('.second-text');

const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Student';
  }, 0);
  setTimeout(() => {
    text.textContent = 'Writer';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'Developer';
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
