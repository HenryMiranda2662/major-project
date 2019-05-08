// MAJOR PROJECT
// Henry Miranda
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class EnemyBall {
  constructor(x, y, dxSomeSpeed, dySomeSpeed) {
    this.x = x;
    this.y = y;
    this.color = [255, 15, 30];
    this.radius = 25;
    this.dx = dxSomeSpeed;
    this.dy = dySomeSpeed;
  }
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
  move() {

    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.dx = -1 * this.dx;
    }

    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.dy = -1 * this.dy;
    }

  }
}

class PlayerBall {
  constructor(x, y, dxSomeSpeed, dySomeSpeed){
    this.x = x;
    this.y = y;
    this.color = [5, 255, 57];
    this.radius = 30;
    this.dx = dxSomeSpeed;
    this.dy = dySomeSpeed;
  }
  display(){
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
  move() {
    if (keyIsDown(RIGHT_ARROW) && (this.x + this.radius <= width)) {
      this.x += this.dx;
    }
    
    if (keyIsDown(LEFT_ARROW) && (this.x - this.radius > 0)) {
      this.x -= this.dx;
    }
    if (keyIsDown(DOWN_ARROW) && (this.y + this.radius <= height)) {
      this.y += this.dy;
    }
    
    if (keyIsDown(UP_ARROW) && (this.y - this.radius > 0)) {
      this.y -= this.dy;
    }
  }
}

let playerBall;
let playerBall_2;
let enemyball1Level1;
let enemyball2Level1;
let enemyball3Level1;
let enemyball1Level2;
let enemyball2Level2;
let enemyball3Level2;
let enemyball1Level3;
let enemyball2Level3;
let enemyball3Level3;
let enemyball1Level4;
let enemyball2Level4;
let enemyball3Level4;
let enemyball1Level5;
let enemyball2Level5;
let enemyball3Level5;
let enemyball4Level5;
let enemyball5Level5;
let enemyball6Level5;

function setup() {
  createCanvas(500, 500);
  state = "menu"
  level1Button = {
    x: 50,
    y: 100,
    width: 113,
    height: 75,
  }
  level2Button = {
    x: 200,
    y: 100,
    width: 113,
    height: 75,
  }
  level3Button = {
    x: 350,
    y: 100,
    width: 113,
    height: 75,
  }
  level4Button = {
    x: 50,
    y: 200,
    width: 113,
    height: 75,
  }
  level5Button = {
    x: 200,
    y: 200,
    width: 113,
    height: 75,
  }

  player1 = new PlayerBall(31, height / 1.5, 4, 0);
  player2 = new PlayerBall(31, height/1.5, 4, 4);

  enemyball1Level1 = new EnemyBall(100, height/2, 0, 17);
  enemyball2Level1 = new EnemyBall(width / 2, height/2, 0, 9);
  enemyball3Level1 = new EnemyBall(400, height/2, 0, 5);

  enemyball1Level2 = new EnemyBall(100, height/2, random(5, 6), random(5, 6));
  enemyball2Level2 = new EnemyBall(width / 2, height/2, random(5, 6), random(5, 6));
  enemyball3Level2 = new EnemyBall(400, height/2, random(5, 6), random(5, 6));
  
  enemyball1Level3 = new EnemyBall(width/2, 100, 12, 0);
  enemyball2Level3 = new EnemyBall(width/2, height/2, 12, 0);
  enemyball3Level3 = new EnemyBall(width/2, 400, 12, 0);

  enemyball1Level4 = new EnemyBall(width / 2, height/2, 5, -5);
  enemyball2Level4 = new EnemyBall(width / 2, height/2, 0, 9);
  enemyball3Level4 = new EnemyBall(width / 2, height/2, 5, 5);

  enemyball1Level5 = new EnemyBall(100, height/2, 0, 7);
  enemyball2Level5 = new EnemyBall(width / 2, height/2, 0, 12);
  enemyball3Level5 = new EnemyBall(400, height/2, 0, 7);
  enemyball4Level5 = new EnemyBall(width/2, 100, 12, 0);
  enemyball5Level5 = new EnemyBall(width/2, height/2, 7, 0);
  enemyball6Level5 = new EnemyBall(width/2, 400, 12, 0);
}

function draw() {
  if (state === "menu") {
    background(80, 170, 200);
    fill("white");
    noStroke();
    rect(level1Button.x, level1Button.y, level1Button.width, level1Button.height);
    rect(level2Button.x, level2Button.y, level2Button.width, level2Button.height);
    rect(level3Button.x, level3Button.y, level3Button.width, level3Button.height);
    rect(level4Button.x, level4Button.y, level4Button.width, level4Button.height);
    rect(level5Button.x, level5Button.y, level5Button.width, level5Button.height);
    
    restartPositions();

  }

  if (state === "Level1") {
    level1BallMovement();
    background("white");
    level1BallDisplay();
    itHitLevel1();  
  }

  if (state === "Level2") {
    level2BallMovement();
    background("white");
    level2BallDisplay();
    itHitLevel2();
  }

  if (state === "Level3") {
    level3BallMovement();
    background("white");
    level3BallDisplay();
    itHitLevel3();
  }

  if (state === "Level4") {
    Level4BallMovement();
    background("white");
    Level4BallDisplay();
    itHitLevel4();
  }

  if (state === "Level5") {
    Level5BallMovement();
    background("white");
    Level5BallDisplay();
    itHitLevel5();
  }
}

function restartPositions() {
  player1.x = 31;
  player2.x = 31;
  player2.y = height/1.5;

  enemyball1Level2.x = 100;
  enemyball1Level2.y = height/2;
  enemyball2Level2.x = width/2;
  enemyball2Level2.y = height/2;
  enemyball3Level2.x = 400;
  enemyball3Level2.y = height/2;

  enemyball1Level3.x = width/2;
  enemyball2Level3.x = width/2;
  enemyball3Level3.x = width/2;
}


function level1BallMovement() {
  enemyball1Level1.move();
  enemyball2Level1.move();
  enemyball3Level1.move(); 
  player1.move(); 
}

function level1BallDisplay(){
  enemyball1Level1.display();
  enemyball2Level1.display();
  enemyball3Level1.display();
  player1.display();
}


function level2BallMovement() {
  enemyball1Level2.move();
  enemyball2Level2.move();
  enemyball3Level2.move();
  player1.move();
}

function level2BallDisplay(){
  enemyball1Level2.display();
  enemyball2Level2.display();
  enemyball3Level2.display();
  player1.display();
}

function level3BallMovement() {
  enemyball1Level3.move();
  enemyball2Level3.move();
  enemyball3Level3.move();
  player2.move();
}

function level3BallDisplay(){
  enemyball1Level3.display();
  enemyball2Level3.display();
  enemyball3Level3.display();
  player2.display();
}

function Level4BallMovement() {
  enemyball1Level4.move();
  enemyball2Level4.move();
  enemyball3Level4.move();
  player2.move();
}

function Level4BallDisplay(){
  enemyball1Level4.display();
  enemyball2Level4.display();
  enemyball3Level4.display();
  player2.display();

}

function Level5BallMovement() {
  enemyball1Level5.move();
  enemyball2Level5.move();
  enemyball3Level5.move();
  enemyball4Level5.move();
  enemyball5Level5.move();
  enemyball6Level5.move();
  player2.move();
}

function Level5BallDisplay(){
  enemyball1Level5.display();
  enemyball2Level5.display();
  enemyball3Level5.display();
  enemyball4Level5.display();
  enemyball5Level5.display();
  enemyball6Level5.display();
  player2.display();
}

function itHitLevel1() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player1.x, player1.y, enemyball1Level1.x, enemyball1Level1.y));                   
  distanceAwayFromCenter2 = int(dist(player1.x, player1.y, enemyball2Level1.x, enemyball2Level1.y));
  distanceAwayFromCenter3 = int(dist(player1.x, player1.y, enemyball3Level1.x, enemyball3Level1.y));
  
  collitionDistance1 = (player1.radius + enemyball1Level1.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||
      distanceAwayFromCenter2 <= collitionDistance1 || 
      distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu";
  }
}

function itHitLevel2() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player1.x, player1.y, enemyball1Level2.x, enemyball1Level2.y));                   
  distanceAwayFromCenter2 = int(dist(player1.x, player1.y, enemyball2Level2.x, enemyball2Level2.y));
  distanceAwayFromCenter3 = int(dist(player1.x, player1.y, enemyball3Level2.x, enemyball3Level2.y));
  
  collitionDistance1 = (player1.radius + enemyball1Level2.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||
      distanceAwayFromCenter2 <= collitionDistance1 || 
      distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu";
  }
}

function itHitLevel3() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level3.x, enemyball1Level3.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level3.x, enemyball2Level3.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level3.x, enemyball3Level3.y));
  
  collitionDistance1 = (player1.radius + enemyball1Level1.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||
      distanceAwayFromCenter2 <= collitionDistance1 || 
      distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu";
  }
}

function itHitLevel4() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level4.x, enemyball1Level4.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level4.x, enemyball2Level4.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level4.x, enemyball3Level4.y));
  
  collitionDistance1 = (player1.radius + enemyball1Level4.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||
      distanceAwayFromCenter2 <= collitionDistance1 || 
      distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu";
  }
}

function itHitLevel5() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level5.x, enemyball1Level5.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level5.x, enemyball2Level5.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level5.x, enemyball3Level5.y));
  distanceAwayFromCenter4 = int(dist(player2.x, player2.y, enemyball4Level5.x, enemyball4Level5.y));                   
  distanceAwayFromCenter5 = int(dist(player2.x, player2.y, enemyball5Level5.x, enemyball5Level5.y));
  distanceAwayFromCenter6 = int(dist(player2.x, player2.y, enemyball6Level5.x, enemyball6Level5.y));
  
  collitionDistance1 = (player2.radius + enemyball1Level4.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||
      distanceAwayFromCenter2 <= collitionDistance1 || 
      distanceAwayFromCenter3  <= collitionDistance1 ||
      distanceAwayFromCenter4 <= collitionDistance1 ||
      distanceAwayFromCenter5 <= collitionDistance1 ||
      distanceAwayFromCenter6 <= collitionDistance1) {
    state = "menu";
  }
}

function clickedOnButtonL1(x, y) {
  return x >= level1Button.x &&
    x <= level1Button.x + level1Button.width &&
    y >= level1Button.y &&
    y <= level1Button.y + level1Button.height;
}

function clickedOnButtonL2(x, y) {
  return x >= level2Button.x &&
    x <= level2Button.x + level2Button.width &&
    y >= level2Button.y &&
    y <= level2Button.y + level2Button.height;
}

function clickedOnButtonL3(x, y) {
  return x >= level3Button.x &&
    x <= level3Button.x + level3Button.width &&
    y >= level3Button.y &&
    y <= level3Button.y + level3Button.height;
}

function clickedOnButtonL4(x, y) {
  return x >= level4Button.x &&
    x <= level4Button.x + level4Button.width &&
    y >= level4Button.y &&
    y <= level4Button.y + level4Button.height;
}

function clickedOnButtonL5(x, y) {
  return x >= level5Button.x &&
    x <= level5Button.x + level5Button.width &&
    y >= level5Button.y &&
    y <= level5Button.y + level5Button.height;
}

function mousePressed() {
  if (state === "menu") {
    if (clickedOnButtonL1(mouseX, mouseY)) {
      state = "Level1";
    }
  }

  if (state === "menu") {
    if (clickedOnButtonL2(mouseX, mouseY)) {
      state = "Level2";
    }
  }
  
  if (state === "menu") {
    if (clickedOnButtonL3(mouseX, mouseY)) {
      state = "Level3";
    }
  }

  if (state === "menu") {
    if (clickedOnButtonL4(mouseX, mouseY)) {
      state = "Level4";
    }
  }

  if (state === "menu") {
    if (clickedOnButtonL5(mouseX, mouseY)) {
      state = "Level5";
    }
  }
}

