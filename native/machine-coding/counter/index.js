const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const changeBy = document.getElementById('changeBy');
const reset = document.getElementById('reset');
const value = document.querySelector('.value');

increment.addEventListener('click', () => {
  value.textContent = +value.textContent + changeBy.valueAsNumber;
});

decrement.addEventListener('click', () => {
  value.textContent = parseInt(value.textContent) - parseInt(changeBy.value);
});

changeBy.addEventListener('change', () => {
  const changeByValue = changeBy.valueAsNumber;

  if (Number.isNaN(changeByValue)) {
    changeBy.value = 1;
  } else if (changeByValue < 0) {
    changeBy.value = 1;
  }
});

reset.addEventListener('click', () => {
  value.textContent = 0;
});
