export default class Game {
  constructor(num_queen) {
    this.num_queen = num_queen;
    this.Tiles = [];
    this.initTiles();
  }

  initTiles() {
    const start = "a".charCodeAt(0);
    for (let i = 0; i < 8; i++) {
      this.Tiles.push(`${String.fromCharCode(start + i)}1`);
    }
  }

  get(square) {
    return this.Tiles.find(e => {
      return e === square;
    });
  }

  move(from, to) {
    let index = this.Tiles.indexOf(from);
    this.Tiles[index] = to;
  }
}
