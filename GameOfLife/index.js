import Grid from './Grid.js';

const CELL_SIZE = 10;
const NUM_COLUMNS = 75;
const NUM_ROWS = 40;

function main() {
  // Resize the canvas to accommodate the desired number of cell rows and
  // columns
  const canvas = document.getElementById('canvas');
  canvas.height = NUM_ROWS * CELL_SIZE;
  canvas.width = NUM_COLUMNS * CELL_SIZE;

  const params = {
    numRows: NUM_ROWS,
    numColumns: NUM_COLUMNS,
    cellSize: CELL_SIZE,
    context: canvas.getContext('2d'),
  };

  const grid = new Grid(params);

  // Start the game
  grid.gameLoop();
}

window.addEventListener('load', main);
