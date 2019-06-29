class Canvas {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.w = 600;
    this.h = 750;

    this.started = false;

    this.road = [
      new Road(this.canvas, this.ctx),
      new Road(this.canvas, this.ctx)
    ];
    this.car = new Car(this.canvas, './images/car.png', this.ctx);
  }

  start() {
    setInterval(
      function () {
        this.clearBoard();
        this.drawRoad();
        this.car.draw();
      }.bind(this),
      1000 / 60
    );
  }

  drawRoad() {
    const speed = 7;
    this.road[0].y += speed;
    if (this.road[0].y > this.canvas.height) {
      this.road[0].y = 0;
    }
    this.road[1].y = this.road[0].y - 750;
    this.road[0].drawRoad();
    this.road[1].drawRoad();
  }

  clearBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
