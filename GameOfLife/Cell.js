class Cell {
  #alive;
  #nextAlive;
  #lifeTime;

  static #cellSize;
  static #context;

  static initStatic(cellSize, context) {
    Cell.#cellSize = cellSize;
    Cell.#context = context;
  }

  constructor() {
    this.#alive = Math.random() > 0.5;
    this.#lifeTime = this.#alive ? 1 : 0;
  }

  get alive() {
    return this.#alive;
  }

  get nextAlive() {
    return this.#nextAlive;
  }

  set nextAlive(value) {
    this.#nextAlive = value;
  }

  updateAlive() {
    this.#alive = this.#nextAlive;
  }

  get lifeTime() {
    return this.#lifeTime;
  }

  incrementLifeTime() {
    this.#lifeTime += 1;
  }

  resetLifeTime() {
    this.#lifeTime = 0;
  }

  draw(x, y) {
    const cellSize = Cell.#cellSize;
    const context = Cell.#context;

    // Draw  background
    context.fillStyle = '#303030';
    context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

    if (this.alive) {
      let opacity;

      switch (this.lifeTime) {
        case 1:
          opacity = 0.25;
          break;
        case 2:
          opacity = 0.5;
          break;
        case 3:
          opacity = 0.75;
          break;
        default:
          opacity = 1;
          break;
      }

      // Draw living  inside background
      context.fillStyle = `rgba(24, 215, 236, ${opacity})`;
      context.fillRect(
        x * cellSize + 1,
        y * cellSize + 1,
        cellSize - 2,
        cellSize - 2
      );
    }
  }
}

export default Cell;
