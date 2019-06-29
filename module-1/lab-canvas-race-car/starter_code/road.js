class Road {
  constructor(board, ctx) {
    this.board = board;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
  }

  drawRoad() {
    this.drawRect(0, 0, 50, this.board.height, 'rgba(20, 168, 14, 1)');
    this.drawRect(50, 0, 10, this.board.height, 'rgba(133, 131, 129, 1)');
    this.drawRect(this.board.width - 50, 0, 50, this.board.height, 'rgba(20, 168, 14, 1)');
    this.drawRect(this.board.width - 60, 0, 10, this.board.height, 'rgba(133, 131, 129, 1)');
    this.drawRect(70, 0, 460, this.board.height, 'rgba(133, 131, 129, 1)');
    this.rectCentralWhite();
  }

  drawRect(x, y, width, height, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }

  rectCentralWhite() {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    for (let i = this.y; i < 750; i += 40) {
      this.ctx.fillRect(300, i, 10, 15);
    }
  }
}
