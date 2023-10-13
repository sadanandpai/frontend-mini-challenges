const $html = document.querySelector('html');
const $switch = document.querySelector('#switch');

$switch.addEventListener('change', () => {
    $html.classList.toggle('dark');
});
