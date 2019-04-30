// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class EnemyBall {
  constructor(x, y, someSpeed) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.radius = 25;
    this.speed = someSpeed;
  }
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
  move() {
    this.y += this.speed;
    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.speed = -1 * this.speed;
    }

  }
}

let EnemyBall1;
let EnemyBall2;
let EnemyBall3;

function setup() {
  createCanvas(500, 500);

  enemyBall1 = new EnemyBall(100, height / 2, 17);
  enemyBall2 = new EnemyBall(width / 2, height / 2, 9);
  enemyBall3 = new EnemyBall(400, height / 2, 5);
}

function draw() {
  enemyBall1.move();
  enemyBall2.move();
  enemyBall3.move();

  background(200);

  enemyBall1.display();
  enemyBall2.display();
  enemyBall3.display();
}

