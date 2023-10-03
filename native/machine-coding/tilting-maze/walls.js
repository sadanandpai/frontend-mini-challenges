
// Wall metadata
const walls = [
    // Border
    { column: 0, row: 0, horizontal: true, length: 10 },
    { column: 0, row: 0, horizontal: false, length: 9 },
    { column: 0, row: 9, horizontal: true, length: 10 },
    { column: 10, row: 0, horizontal: false, length: 9 },
  
    // Horizontal lines starting in 1st column
    { column: 0, row: 6, horizontal: true, length: 1 },
    { column: 0, row: 8, horizontal: true, length: 1 },
  
    // Horizontal lines starting in 2nd column
    { column: 1, row: 1, horizontal: true, length: 2 },
    { column: 1, row: 7, horizontal: true, length: 1 },
  
    // Horizontal lines starting in 3rd column
    { column: 2, row: 2, horizontal: true, length: 2 },
    { column: 2, row: 4, horizontal: true, length: 1 },
    { column: 2, row: 5, horizontal: true, length: 1 },
    { column: 2, row: 6, horizontal: true, length: 1 },
  
    // Horizontal lines starting in 4th column
    { column: 3, row: 3, horizontal: true, length: 1 },
    { column: 3, row: 8, horizontal: true, length: 3 },
  
    // Horizontal lines starting in 5th column
    { column: 4, row: 6, horizontal: true, length: 1 },
  
    // Horizontal lines starting in 6th column
    { column: 5, row: 2, horizontal: true, length: 2 },
    { column: 5, row: 7, horizontal: true, length: 1 },
  
    // Horizontal lines starting in 7th column
    { column: 6, row: 1, horizontal: true, length: 1 },
    { column: 6, row: 6, horizontal: true, length: 2 },
  
    // Horizontal lines starting in 8th column
    { column: 7, row: 3, horizontal: true, length: 2 },
    { column: 7, row: 7, horizontal: true, length: 2 },
  
    // Horizontal lines starting in 9th column
    { column: 8, row: 1, horizontal: true, length: 1 },
    { column: 8, row: 2, horizontal: true, length: 1 },
    { column: 8, row: 3, horizontal: true, length: 1 },
    { column: 8, row: 4, horizontal: true, length: 2 },
    { column: 8, row: 8, horizontal: true, length: 2 },
  
    // Vertical lines after the 1st column
    { column: 1, row: 1, horizontal: false, length: 2 },
    { column: 1, row: 4, horizontal: false, length: 2 },
  
    // Vertical lines after the 2nd column
    { column: 2, row: 2, horizontal: false, length: 2 },
    { column: 2, row: 5, horizontal: false, length: 1 },
    { column: 2, row: 7, horizontal: false, length: 2 },
  
    // Vertical lines after the 3rd column
    { column: 3, row: 0, horizontal: false, length: 1 },
    { column: 3, row: 4, horizontal: false, length: 1 },
    { column: 3, row: 6, horizontal: false, length: 2 },
  
    // Vertical lines after the 4th column
    { column: 4, row: 1, horizontal: false, length: 2 },
    { column: 4, row: 6, horizontal: false, length: 1 },
  
    // Vertical lines after the 5th column
    { column: 5, row: 0, horizontal: false, length: 2 },
    { column: 5, row: 6, horizontal: false, length: 1 },
    { column: 5, row: 8, horizontal: false, length: 1 },
  
    // Vertical lines after the 6th column
    { column: 6, row: 4, horizontal: false, length: 1 },
    { column: 6, row: 6, horizontal: false, length: 1 },
  
    // Vertical lines after the 7th column
    { column: 7, row: 1, horizontal: false, length: 4 },
    { column: 7, row: 7, horizontal: false, length: 2 },
  
    // Vertical lines after the 8th column
    { column: 8, row: 2, horizontal: false, length: 1 },
    { column: 8, row: 4, horizontal: false, length: 2 },
  
    // Vertical lines after the 9th column
    { column: 9, row: 1, horizontal: false, length: 1 },
    { column: 9, row: 5, horizontal: false, length: 2 }
  ].map((wall) => ({
    x: wall.column * (pathW + wallW),
    y: wall.row * (pathW + wallW),
    horizontal: wall.horizontal,
    length: wall.length * (pathW + wallW)
  }));
  
  // Draw walls
  walls.forEach(({ x, y, horizontal, length }) => {
    const wall = document.createElement("div");
    wall.setAttribute("class", "wall");
    wall.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        width: ${wallW}px;
        height: ${length}px;
        transform: rotate(${horizontal ? -90 : 0}deg);
      `;
  
    mazeElement.appendChild(wall);
  });