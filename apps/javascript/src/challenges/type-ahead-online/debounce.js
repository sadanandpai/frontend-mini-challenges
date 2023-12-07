export function debounce(fn, delay = 500) {
  let timerId = null;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    timerId = setTimeout(fn, delay, ...args);
  };
}
