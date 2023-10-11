// JavaScript functionality for toggling the mobile navigation menu
const toggleMenu = () => {
    const footerLinks = document.querySelector('.footer-links ul');
    footerLinks.classList.toggle('show');
};

const menuButton = document.querySelector('.footer-links button');
menuButton.addEventListener('click', toggleMenu);
