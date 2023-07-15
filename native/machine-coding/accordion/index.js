// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Attach click event listener to each accordion header
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header');
    const accordionButton = item.querySelector('.accordion-button');
    const accordionPanel = item.querySelector('.accordion-panel');
    const accordionArrow = item.querySelector('.accordion-arrow');

    // Toggle the open class on click
    accordionHeader.addEventListener('click', () => {
        const isOpen = accordionPanel.classList.contains('open');

        // Close all other accordion items
        accordionItems.forEach((item) => {
            item.querySelector('.accordion-panel').classList.remove('open');
            item.querySelector('.accordion-arrow').classList.remove('open');
        });

        if (!isOpen) {
            accordionPanel.classList.add('open');
            accordionArrow.classList.add('open');
        } else {
            accordionPanel.classList.remove('open');
            accordionArrow.classList.remove('open');
        }
    });
});
