const RIGHT_KEY = 39;
const TOP_KEY = 38;
const BOTTOM_KEY = 40;
const LEFT_KEY = 37;

class Car {
  constructor(canvasId, image, ctx) {
    this.canvas = canvasId;
    this.ctx = ctx;

    this.image = new Image();
    this.image.src = image;

    this.x = 250;
    this.y = 400;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, 80, 120);
  }

  move(keyCode) {
    const d = 5;
    switch (keyCode) {
      case RIGHT_KEY:
        if (this.x >= 480) {
          alert('Out of track!');
        } else {
          this.x += d;
        }
        break;
      case LEFT_KEY:
        if (this.x < 50) {
          alert('Out of track!');
        } else {
          this.x -= d;
        }
        break;
      case TOP_KEY:
        this.y -= d;
        break;
      case BOTTOM_KEY:
        this.y += d;
        break;
      default:
        break;
    }
  }
}
