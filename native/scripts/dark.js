const $html = document.querySelector('html');
const $switch = document.querySelector('#dark-toggle');

const DARK_CLASS = 'dark';
const LOCAL_STORAGE_DARK_KEY = 'isDark';

initDarkState();

$switch.addEventListener('click', () => {
  $html.classList.toggle(DARK_CLASS);
  localStorage.setItem(LOCAL_STORAGE_DARK_KEY, $html.classList.contains(DARK_CLASS));
});

function initDarkState() {
  const DARK_STATE = localStorage.getItem(LOCAL_STORAGE_DARK_KEY);

  if (DARK_STATE && DARK_STATE === 'true') {
    $html.classList.add(DARK_CLASS);
  }
}
