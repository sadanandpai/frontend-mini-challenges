// DOM Elements
const elements = {
  increment: document.getElementById('increment'),
  decrement: document.getElementById('decrement'),
  changeBy: document.getElementById('changeBy'),
  reset: document.getElementById('reset'),
  counterValue: document.getElementById('counter-value'),
  counterAnnouncement: document.getElementById('counter-announcement'),
};

// Constants
const COUNTER_DEFAULTS = {
  MIN_VALUE: -1000,
  MAX_VALUE: 1000,
  DEFAULT_VALUE: 0,
  MIN_STEP: 1,
  MAX_STEP: 10,
  DEFAULT_STEP: 1,
  ANNOUNCE_DELAY: 100,
};

// State
let counterValue = COUNTER_DEFAULTS.DEFAULT_VALUE;
let lastAnnouncementTime = 0;

/**
 * Announces the current counter value to screen readers
 * @param {string} action - The action that triggered the update
 */
const announceCounterUpdate = (action) => {
  const now = Date.now();
  // Throttle announcements to prevent overwhelming screen readers
  if (now - lastAnnouncementTime < COUNTER_DEFAULTS.ANNOUNCE_DELAY) {
    return;
  }

  lastAnnouncementTime = now;

  let message = `Counter is now ${counterValue}`;
  if (action === 'increment') {
    message = `Increased to ${counterValue}`;
  } else if (action === 'decrement') {
    message = `Decreased to ${counterValue}`;
  } else if (action === 'reset') {
    message = `Counter reset to ${counterValue}`;
  }
  elements.counterAnnouncement.textContent = message;

  // Clear the announcement after a delay
  setTimeout(() => {
    elements.counterAnnouncement.textContent = '';
  }, COUNTER_DEFAULTS.ANNOUNCE_DELAY * 2);
};

/**
 * Updates the counter display and ARIA attributes
 */
const updateDisplay = () => {
  elements.counterValue.textContent = counterValue;
  elements.counterValue.setAttribute('aria-valuenow', counterValue);
  elements.counterValue.setAttribute('aria-valuetext', counterValue.toString());

  // Update button states based on counter limits
  elements.increment.disabled = counterValue >= COUNTER_DEFAULTS.MAX_VALUE;
  elements.decrement.disabled = counterValue <= COUNTER_DEFAULTS.MIN_VALUE;

  // Update ARIA attributes for buttons
  elements.increment.setAttribute('aria-disabled', elements.increment.disabled);
  elements.decrement.setAttribute('aria-disabled', elements.decrement.disabled);
};

/**
 * Validates if a step value is within the allowed range
 * @param {number} step - The step value to validate
 * @returns {boolean} - True if the step is valid
 */
const isValidStep = (step) => {
  return !isNaN(step) && step >= COUNTER_DEFAULTS.MIN_STEP && step <= COUNTER_DEFAULTS.MAX_STEP;
};

/**
 * Gets the current valid step value from the input
 * @returns {number} - The validated step value
 */
const getValidStep = () => {
  const step = elements.changeBy.valueAsNumber;
  return isValidStep(step) ? step : COUNTER_DEFAULTS.DEFAULT_STEP;
};

/**
 * Updates the counter based on the specified operation
 * @param {string} operation - The operation to perform ('increment', 'decrement', or 'reset')
 */
const updateCounter = (operation, event = null) => {
  // Prevent default form submission if called from a form
  if (event && event.type === 'submit') {
    event.preventDefault();
  }

  const previousValue = counterValue;
  const step = getValidStep();

  switch (operation) {
    case 'increment':
      counterValue = Math.min(COUNTER_DEFAULTS.MAX_VALUE, counterValue + step);
      break;
    case 'decrement':
      counterValue = Math.max(COUNTER_DEFAULTS.MIN_VALUE, counterValue - step);
      break;
    case 'reset':
      counterValue = COUNTER_DEFAULTS.DEFAULT_VALUE;
      break;
  }

  if (counterValue !== previousValue || operation === 'reset') {
    updateDisplay();
    announceCounterUpdate(operation);
  }
};

/**
 * Handles changes to the step input
 */
const handleStepChange = (event) => {
  const step = elements.changeBy.valueAsNumber;
  if (!isValidStep(step)) {
    elements.changeBy.value = COUNTER_DEFAULTS.DEFAULT_STEP;
  }

  // Update ARIA attributes for the step input
  elements.changeBy.setAttribute('aria-valuenow', elements.changeBy.value);
  elements.changeBy.setAttribute('aria-valuetext', elements.changeBy.value);
  // Announce the new step value
  announceCounterUpdate('step');
};

/**
 * Handles keyboard navigation for the counter
 * @param {KeyboardEvent} event - The keyboard event
 */
const handleKeyDown = (event) => {
  // Skip if the event is already handled or if the target is an input field
  if (event.defaultPrevented || event.target.tagName === 'INPUT') {
    return;
  }

  switch (event.key) {
    case '+':
    case 'ArrowUp':
      updateCounter('increment');
      event.preventDefault();
      break;
    case '-':
    case 'ArrowDown':
      updateCounter('decrement');
      event.preventDefault();
      break;
    case 'Home':
      updateCounter('reset');
      event.preventDefault();
      break;
    case 'PageUp':
      elements.changeBy.stepUp();
      handleStepChange();
      event.preventDefault();
      break;
    case 'PageDown':
      elements.changeBy.stepDown();
      handleStepChange();
      event.preventDefault();
      break;
  }
};

/**
 * Initializes the counter application
 */
const initCounter = () => {
  // Set initial ARIA attributes
  elements.counterValue.setAttribute('role', 'status');
  elements.counterValue.setAttribute('aria-live', 'polite');
  elements.counterValue.setAttribute('aria-atomic', 'true');
  elements.changeBy.setAttribute('aria-valuemin', COUNTER_DEFAULTS.MIN_STEP);
  elements.changeBy.setAttribute('aria-valuemax', COUNTER_DEFAULTS.MAX_STEP);

  // Add event listeners
  elements.increment.addEventListener('click', (e) => updateCounter('increment', e));
  elements.decrement.addEventListener('click', (e) => updateCounter('decrement', e));
  elements.reset.addEventListener('click', (e) => updateCounter('reset', e));
  elements.changeBy.addEventListener('change', handleStepChange);
  elements.changeBy.addEventListener('input', handleStepChange);

  // Add keyboard event listener to document for global shortcuts
  document.addEventListener('keydown', handleKeyDown);
  // Initialize the display
  updateDisplay();
  // Set focus to the counter for keyboard users
  elements.counterValue.tabIndex = -1;
};

// Initialize the counter when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initCounter);
