let count = 0;

function increment() {
  count++;
  document.getElementById('count').innerText = count;
}

function decrement() {
  count--;
  document.getElementById('count').innerText = count;
}
