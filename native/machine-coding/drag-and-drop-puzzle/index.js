const pieces = document.querySelectorAll('.piece');

let draggingPiece = null;

function handleDragStart(event) {
  event.currentTarget.classList.add('dragging');
  draggingPiece = event.currentTarget;
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const dropPiece = event.currentTarget;

  // Swap the order data attribute between the dragging and drop pieces
  const tempOrder = draggingPiece.dataset.order;
  draggingPiece.dataset.order = dropPiece.dataset.order;
  dropPiece.dataset.order = tempOrder;

  // Reorder the pieces based on the data-order attribute
  const sortedPieces = Array.from(pieces).sort((a, b) => a.dataset.order - b.dataset.order);
  const puzzleContainer = document.querySelector('.puzzle-container');
  sortedPieces.forEach((piece) => puzzleContainer.appendChild(piece));

  // Reset the draggingPiece variable and remove the dragging class
  draggingPiece.classList.remove('dragging');
  draggingPiece = null;
}

// to handle when piece dropped outside dropzone
function handleDragEnd(event){
   // Reset the draggingPiece variable and remove the dragging class
    draggingPiece?.classList?.remove('dragging');
    draggingPiece = null;
}

pieces.forEach((piece) => {
  piece.addEventListener('dragstart', handleDragStart);
  piece.addEventListener('dragover', handleDragOver);
  piece.addEventListener('drop', handleDrop);
  piece.addEventListener('dragend', handleDragEnd);
});
