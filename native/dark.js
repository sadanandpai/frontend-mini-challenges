const $html = document.querySelector('html');
const $switch = document.querySelector('#dark-toggle');

$switch.addEventListener('click', () => {
    $html.classList.toggle('dark');
});
