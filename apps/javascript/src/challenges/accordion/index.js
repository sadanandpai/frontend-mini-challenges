// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');
// Get the checkbox element by its ID
const multipleOpenCheckbox = document.getElementById('multiple-open-checkbox');
let multipleOpenAllowed = false;

const closeAccordion = (accordionPanel, accordionArrow) => {
  accordionPanel.classList.remove('open');
  accordionArrow.classList.remove('open');
  accordionPanel.style.maxHeight = null;
};

const openAccordion = (accordionPanel, accordionArrow) => {
  accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px';
  accordionPanel.classList.add('open');
  accordionArrow.classList.add('open');
};

const closeAllAccordions = () => {
  accordionItems.forEach((item) => {
    const accordionPanel = item.querySelector('.accordion-panel');
    const accordionArrow = item.querySelector('.accordion-arrow');
    closeAccordion(accordionPanel, accordionArrow);
  });
};

// Add an event listener to listen for changes (checks/unchecks)
multipleOpenCheckbox.addEventListener('change', function () {
  if (multipleOpenCheckbox.checked) {
    // Checkbox is checked
    multipleOpenAllowed = true;
  } else {
    // Checkbox is unchecked
    multipleOpenAllowed = false;
    closeAllAccordions();
  }
});

// Attach click event listener to each accordion header
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion-header');
  const accordionPanel = item.querySelector('.accordion-panel');
  const accordionArrow = item.querySelector('.accordion-arrow');

  // Toggle the open class on click
  accordionHeader.addEventListener('click', () => {
    const isOpen = accordionPanel.classList.contains('open');

    // Close all other accordion items
    if (!multipleOpenAllowed) {
      closeAllAccordions();
    }

    if (!isOpen) {
      openAccordion(accordionPanel, accordionArrow);
    } else {
      closeAccordion(accordionPanel, accordionArrow);
    }
  });
});
