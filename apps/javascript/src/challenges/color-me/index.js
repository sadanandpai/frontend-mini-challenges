// DOM Elements
const gridContainer = document.getElementById('grid');
const inputBox = document.getElementById('input-box');
const rowInput = document.getElementById('row-input');
const colInput = document.getElementById('col-input');
const colorForm = document.getElementById('color-form');
const errorMessage = document.getElementById('error-message');

// Configuration
const GRID_SIZE = 3; // 3x3 grid
const TOTAL_ITEMS = GRID_SIZE * GRID_SIZE;

// State
let activeElementIdx = null;
let gridItems = [];

/**
 * Creates a grid item element with the given value
 * @param {number} value - The number to display in the grid item
 * @returns {HTMLElement} The created grid item element
 */
function createGridItem(value) {
  const gridItem = document.createElement('div');
  gridItem.className = 'grid-item';
  gridItem.textContent = value;
  gridItem.dataset.value = value;
  gridItem.setAttribute('role', 'gridcell');
  gridItem.setAttribute('aria-label', `Grid item ${value}`);

  // Add click handler to select cell directly
  gridItem.addEventListener('click', () => {
    inputBox.value = value;
    rowInput.value = '';
    colInput.value = '';
    selectCell(value - 1);
  });

  return gridItem;
}

/**
 * Creates and appends grid items to the container
 */
function createGrid() {
  gridContainer.innerHTML = ''; // Clear existing grid
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= TOTAL_ITEMS; i++) {
    fragment.appendChild(createGridItem(i));
  }

  gridContainer.appendChild(fragment);
  gridItems = Array.from(gridContainer.querySelectorAll('.grid-item'));
}

/**
 * Gets the cell index from row and column numbers (1-based)
 * @param {number} row - Row number (1-3)
 * @param {number} col - Column number (1-3)
 * @returns {number} Zero-based cell index
 */
function getCellIndexFromRowCol(row, col) {
  return (row - 1) * GRID_SIZE + (col - 1);
}

/**
 * Validates the input values
 * @returns {{valid: boolean, error: string|null, cellIndex: number|null}} Validation result
 */
function validateInputs() {
  const cellValue = inputBox.value.trim();
  const rowValue = rowInput.value.trim();
  const colValue = colInput.value.trim();

  // If using cell number input
  if (cellValue) {
    const numValue = parseInt(cellValue, 10);

    if (isNaN(numValue)) {
      return { valid: false, error: 'Please enter a valid number', cellIndex: null };
    }

    if (numValue < 1 || numValue > TOTAL_ITEMS) {
      return {
        valid: false,
        error: `Please enter a number between 1 and ${TOTAL_ITEMS}`,
        cellIndex: null,
      };
    }

    return { valid: true, error: null, cellIndex: numValue - 1 };
  }

  // If using row/column inputs
  if (rowValue || colValue) {
    if (!rowValue || !colValue) {
      return {
        valid: false,
        error: 'Please enter both row and column numbers',
        cellIndex: null,
      };
    }

    const row = parseInt(rowValue, 10);
    const col = parseInt(colValue, 10);

    if (isNaN(row) || isNaN(col)) {
      return {
        valid: false,
        error: 'Please enter valid row and column numbers',
        cellIndex: null,
      };
    }

    if (row < 1 || row > GRID_SIZE || col < 1 || col > GRID_SIZE) {
      return {
        valid: false,
        error: `Please enter row and column numbers between 1 and ${GRID_SIZE}`,
        cellIndex: null,
      };
    }

    return {
      valid: true,
      error: null,
      cellIndex: getCellIndexFromRowCol(row, col),
    };
  }

  return { valid: false, error: 'Please enter a cell number or row/column', cellIndex: null };
}

/**
 * Updates the UI to show an error message
 * @param {string} message - The error message to display
 */
function showError(message) {
  errorMessage.textContent = message;
  const invalidInput = inputBox.value.trim()
    ? inputBox
    : rowInput.value.trim()
      ? rowInput
      : colInput;
  invalidInput.setAttribute('aria-invalid', 'true');
  invalidInput.focus();
}

/**
 * Clears any error messages
 */
function clearError() {
  errorMessage.textContent = '';
  inputBox.setAttribute('aria-invalid', 'false');
  rowInput.setAttribute('aria-invalid', 'false');
  colInput.setAttribute('aria-invalid', 'false');
}

/**
 * Selects and highlights a cell by index
 * @param {number} cellIndex - Zero-based index of the cell to select
 */
function selectCell(cellIndex) {
  // Remove active class from previously selected item
  if (activeElementIdx !== null && gridItems[activeElementIdx]) {
    gridItems[activeElementIdx].classList.remove('active');
  }

  // Add active class to newly selected item
  if (gridItems[cellIndex]) {
    gridItems[cellIndex].classList.add('active');
    activeElementIdx = cellIndex;

    // Announce the selection to screen readers
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = `Selected cell ${cellIndex + 1}`;
    document.body.appendChild(liveRegion);

    // Clean up
    setTimeout(() => document.body.removeChild(liveRegion), 1000);
  }
}

/**
 * Handles the form submission
 * @param {Event} event - The form submit event
 */
function handleSubmit(event) {
  event.preventDefault();
  clearError();

  const { valid, error, cellIndex } = validateInputs();

  if (!valid) {
    showError(error);
    return;
  }

  selectCell(cellIndex);

  // Clear inputs after successful selection
  inputBox.value = '';
  rowInput.value = '';
  colInput.value = '';

  // Focus back to the first input for better UX
  inputBox.focus();
}

/**
 * Syncs inputs when one changes to prevent conflicts
 */
function syncInputs() {
  if (this === inputBox && this.value.trim()) {
    rowInput.value = '';
    colInput.value = '';
  } else if (
    (this === rowInput || this === colInput) &&
    (rowInput.value.trim() || colInput.value.trim())
  ) {
    inputBox.value = '';
  }
  clearError();
}

// Initialize the application
function init() {
  createGrid();

  // Add event listeners
  colorForm.addEventListener('submit', handleSubmit);

  // Sync inputs to prevent conflicts
  inputBox.addEventListener('input', syncInputs);
  rowInput.addEventListener('input', syncInputs);
  colInput.addEventListener('input', syncInputs);

  // Focus the first input on page load
  inputBox.focus();
}

// Start the application
init();
