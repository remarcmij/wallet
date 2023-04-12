import Cell from './Cell.js';

class Grid {
  #grid = [];
  #numRows;
  #numColumns;

  constructor({ numRows, numColumns, cellSize, context }) {
    this.#numRows = numRows;
    this.#numColumns = numColumns;

    Cell.initStatic(cellSize, context);

    // Create initial grid
    for (let y = 0; y < numRows; y++) {
      const row = [];
      for (let x = 0; x < numColumns; x++) {
        const cell = new Cell();
        row.push(cell);
      }
      this.#grid.push(row);
    }
  }

  // Check the state of the cell at the given coordinates
  #isAlive(x, y) {
    // Out-of-border cells are presumed dead
    if (x < 0 || x >= this.#numColumns || y < 0 || y >= this.#numRows) {
      return 0;
    }

    return this.#grid[y][x].alive ? 1 : 0;
  }

  // Count the number of living neighboring cells for a given cell
  #countLivingNeighbors(x, y) {
    return (
      this.#isAlive(x - 1, y - 1) +
      this.#isAlive(x, y - 1) +
      this.#isAlive(x + 1, y - 1) +
      this.#isAlive(x - 1, y) +
      this.#isAlive(x + 1, y) +
      this.#isAlive(x - 1, y + 1) +
      this.#isAlive(x, y + 1) +
      this.#isAlive(x + 1, y + 1)
    );
  }

  // Execute a callback for each cell in the grid
  #forEachCell(callback) {
    this.#grid.forEach((row, y) => {
      row.forEach((cell, x) => {
        callback(cell, x, y);
      });
    });
  }

  // Update the state of the cells in the grid by applying the Game Of Life
  // rules on each cell.
  #updateGrid() {
    // Loop over all cells to determine their next state.
    this.#forEachCell((cell, x, y) => {
      // Count number of living neighboring cells
      const numAlive = this.#countLivingNeighbors(x, y);

      if (numAlive === 2) {
        // Living cell remains living, dead cell remains dead
        cell.nextAlive = cell.alive;
      } else if (numAlive === 3) {
        // Dead cell becomes living, living cell remains living
        cell.nextAlive = true;
      } else {
        // Living cell dies, dead cell remains dead
        cell.nextAlive = false;
      }

      //lifeTime incremented by one when it's going to be live or remain live in the next generation
      if (cell.nextAlive) {
        cell.incrementLifeTime();
      } else {
        cell.resetLifeTime();
      }
    });

    // Apply the newly computed state to the cells
    this.#forEachCell((cell) => cell.updateAlive());
  }

  #renderGrid() {
    // Draw all cells in the grid
    this.#forEachCell((cell, x, y) => cell.draw(x, y));
  }

  gameLoop() {
    // Update the state of cells in the grid
    this.#updateGrid();

    // Render the updated grid
    this.#renderGrid();

    // Schedule the next generation
    setTimeout(() => {
      window.requestAnimationFrame(() => this.gameLoop());
    }, 200);
  }
}

export default Grid;
