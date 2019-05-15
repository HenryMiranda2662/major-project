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

let state;
let abilityButton;
let gridSize = 3;
let cellSize;
let xOffset;
let yOffset;
let level;
let cellPictureWidth;
let cellPictureHeight;


function setup() {
  createCanvas(500, 500);
  
  state = "menu";//Sets the first state as menu

  cellSize = 150; // Cell size for the grid I'll use
  xOffset = 50;
  yOffset = 130;
  level = "zero" //Variable which will change which power will be used
  
  abilityButton = {
  x : 365,
  y : 250,
  width : 120,
  height : 75,
  // image : loadImage("assets/go.png"),
  // image2 : loadImage("assets/go2.png")
  }
}
  
function draw() {
  //Will Draw according to state
  checkStates();
}

function checkStates(){
  // Will check the state at which we currently are and diplay accordingly
  if (state === "menu") {
    displayGrid();  
  }

  if (state === "levels") {
    checkPowerScreen();
  }

}


function displayGrid() {
  push();
  translate(xOffset, yOffset);// Changes where the origin of the grid is
  background(125, 75, 130)
  fill(255);
  for (let y = 0; y < gridSize; y++) {//2d array to create an array
    for (let x = 0; x < gridSize; x++) {
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
  //Pictures inside of the grid
  pop();// Stop translating, and get canvas back to normal

  displayGridButton();
}



function checkPowerScreen() {
  //Depending on which power the user chooses, it displays the according screen
  if (level === "one" ) {
    level1();
  }
  if (level === "two" ) {
    level2();
  }
  if (level === "three" ) {
    level3();
  }
  if (level === "four") {
    level4();
  }
  if (level === "five") {
    level5();
  }
  if (level === "six") {
    level6();
  }
}

function displayGridButton(){
  rect(abilityButton.x, abilityButton.y, abilityButton.width, abilityButton.height)

}



function mousePressed() {
  //Checks the state, and also if the mouse has clicked a button during that state,
  // if so, it changes the state to a differnt, corresponding state
 checkGridLevel();
  if (state === "menu") {
    if (clickedOnButtonAbility(mouseX, mouseY)) {
      state = "levels";
    }
  }
}

function checkGridLevel(){
  let xcoord = floor((mouseX - xOffset) / cellSize);// makes coordinates on the grid
  let ycoord = floor((mouseY - yOffset) / cellSize);
  if (state === "grid"){
    if (xcoord === 0 && ycoord === 0) {// Checks on which cell the user clicks, and changes the variable
      level = "one";
    }

    if (xcoord === 1 && ycoord === 0) {
      level = "two";
    }

    if (xcoord === 2 && ycoord === 0) {
      level = "three";
    }

    if (xcoord === 0 && ycoord === 1) {
      level = "four";
    } 

    if (xcoord === 1 && ycoord === 1) {
      level = "normalGameplay";
    } 

    if (xcoord === 2 && ycoord === 1) {
      level = "normalGameplay";
    } 

    if (xcoord === 0 && ycoord === 2) {
      level = "normalGameplay";
    } 

    if (xcoord === 1 && ycoord === 2) {
      level = "normalGameplay";
    } 

    if (xcoord === 2 && ycoord === 2) {
      level = "normalGameplay";
    } 
  }
}

function clickedOnButtonAbility(x, y) {
  // Checks if user clicks on button then, changes state
  if (state === "grid"){
    return x >= abilityButton.x &&
     x <= abilityButton.x + abilityButton.width &&
      y >= abilityButton.y &&
      y <= abilityButton.y + abilityButton.height;
  }
}



