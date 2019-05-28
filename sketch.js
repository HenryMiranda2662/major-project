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

let state;
let gridButton;
let gridSizeY = 4;
let gridSizeX = 3;
let cellSize;
let xOffset;
let yOffset;
let level;
let cellPictureWidth = 90;
let cellPictureHeight = 90;



function setup() {
  createCanvas(500, 500);

  backgroundImage = loadImage("assets/bckimg.png");
  titleImage = loadImage("assets/title.png")
  
  level1Picture = loadImage("assets/1.png")
  level2Picture = loadImage("assets/2.png")
  level3Picture = loadImage("assets/3.png")
  level4Picture = loadImage("assets/4.png")
  level5Picture = loadImage("assets/5.png")
  level6Picture = loadImage("assets/6.png")
  level7Picture = loadImage("assets/7.png")
  level8Picture = loadImage("assets/8.png")
  level9Picture = loadImage("assets/9.png")
  level10Picture = loadImage("assets/10.png")
  level11Picture = loadImage("assets/11.png")
  level12Picture = loadImage("assets/12.png")
  
  state = "main_menu";//Sets the first state as menu

  cellSize = 100; // Cell size for the grid I'll use
  xOffset = 30;
  yOffset = 65;
  level = "one" //Variable which will change which power will be used

  playButton = {
    x : width/2,
    y : height/1.8,
    width : 240,
    height : 75,
    image : loadImage("assets/playbutton.png"),   // Two images, which will switch back and forth when you  
    image2 : loadImage ("assets/playbutton2.png"),// hover the mouse over them
  }

  instructionButton = {
    x : width/2,
    y : (height/1.8) + 100,
    width : 240,
    height : 75,
    image : loadImage("assets/insbutton.png"),   // Two images, which will switch back and forth when you  
    image2 : loadImage ("assets/insbutton2.png"),// hover the mouse over them
  }

  levelButton = {
    x: 175,   
    y: 382,
    width: 150,
    height: 75,
    image: loadImage("assets/insb.png"),
    image2: loadImage("assets/insb2.png"),
  }
  
  gridButton = {
    x : 365,
    y : 250,
    width : 120,
    height : 75,
    image : loadImage("assets/go.png"),
    image2 : loadImage("assets/go2.png")
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
  //Will Draw according to state
  checkStates();
}

function checkStates(){
  // Will check the state at which we currently are and diplay accordingly
  if (state === "main_menu"){
    imageMode(CORNERS);
    background(backgroundImage);
    imageMode(CENTER);
    image(titleImage, 250, 100, 440, 86);
    displayMenu();
    checkCursor();
    restartPositions();

  }

  if (state === "instructions"){
    let a = "For levels 1 to 3,  you  can use the right and left" 
    let b = "arrows to move. For level 4 onwards, you can "
    let c = "also use the up and down arrows. Collect all " 
    let d = "three stars to pass to the next level "
    background(197, 160, 229);
    textAlign(CENTER, CENTER);
    textSize(23);
    fill("black");

    text (a, 250, 100);
    text (b, 250, 170);
    text (c, 250, 240);
    text (d, 250, 310);

    rectMode(CORNER)
    image(levelButton.image, levelButton.x, levelButton.y, levelButton.width, levelButton.height);

    checkCursor();

  }

  if (state === "menu") {
    displayGrid();  
    
  }

  if (state === "levels") {
    checkPowerScreen();
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

function displayGrid() {
  push();
  translate(xOffset, yOffset);// Changes where the origin of the grid is
  background(100, 175, 130)
  fill(255);
  for (let y = 0; y < gridSizeY; y ++ ) {//2d array to create an array
    for (let x = 0; x < gridSizeX; x ++ ) {
      stroke(0);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
  //Pictures inside of the grid
  //imageMode(CENTER)
  image(level1Picture, 5, 5, cellPictureWidth, cellPictureHeight);
  image(level2Picture, 1*cellSize + 5, 0*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level3Picture, 2*cellSize + 5, 0*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level4Picture, 0*cellSize + 5, 1*cellSize + 5 , cellPictureWidth , cellPictureHeight );
  image(level5Picture, 1*cellSize + 5, 1*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level6Picture, 2*cellSize + 5, 1*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level7Picture, 0*cellSize + 5, 2*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level8Picture, 1*cellSize + 5, 2*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level9Picture, 2*cellSize + 5, 2*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level10Picture, 0*cellSize + 5, 3*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level11Picture, 1*cellSize + 5, 3*cellSize + 5, cellPictureWidth, cellPictureHeight);
  image(level12Picture, 2*cellSize + 5, 3*cellSize + 5, cellPictureWidth, cellPictureHeight);
  
  pop();// Stop translating, and get canvas back to normal
  displayGridButton();
  checkCursor()
}

function displayMenu() {
  // Creates a button during the first screen "menu"
  
  // rect(playButton.x, playButton.y, playButton.width, playButton.height);
  imageMode(CENTER)
  image(playButton.image, playButton.x, playButton.y, playButton.width, playButton.height);

  imageMode(CENTER)
  image(instructionButton.image, instructionButton.x, instructionButton.y, instructionButton.width, instructionButton.height);
}

function checkPowerScreen() {
  //Depending on which power the user chooses, it displays the according screen
  if (level === "one" ) {
    level1();
    noCursor();
  }
  if (level === "two" ) {
    level2();
    noCursor();
  }
  if (level === "three" ) {
    level3();
    noCursor();
  }
  if (level === "four") {
    level4();
    noCursor();
  }
  if (level === "five") {
    level5();
    noCursor();
  }
  if (level === "six") {
    level6();
    noCursor();
  }
  if (level === "seven") {
    level7();
    noCursor();
  }
  if (level === "eight") {
    level8();
    noCursor();
  }
  if (level === "nine") {
    level9();
    noCursor();
  }
  if (level === "ten") {
    level10();
    noCursor();
  }
  if (level === "eleven") {
    level11();
    noCursor();
  }
  if (level === "twelve") {
    level12();
    noCursor();
  }
}

function displayGridButton(){
  imageMode(CORNER)
  image(gridButton.image, gridButton.x, gridButton.y, gridButton.width, gridButton.height)
}

function level1(){
  level1BallMovement();
  background(190, 192, 190);
  level1BallDisplay();
  itHitLevel1();
}

function level2(){
  level2BallMovement();
  background(190, 192, 190);
  level2BallDisplay();
  itHitLevel2();
}

function level3(){
  level3BallMovement();
  background(190, 192, 190);
  level3BallDisplay();
  itHitLevel3();
}

function level4(){
  Level4BallMovement();
  background(190, 192, 190);
  Level4BallDisplay();
  itHitLevel4();
}

function level5(){
  Level5BallMovement();
  background(190, 192, 190);
  Level5BallDisplay();
  itHitLevel5();
}

function level6(){
  Level4BallMovement();
  background(190, 192, 190);
  Level4BallDisplay();
  itHitLevel4();
}

function level7(){
  Level4BallMovement();
  background(190, 192, 190);
  Level4BallDisplay();
  itHitLevel4();
}

function level8(){
  Level4BallMovement();
  background(190, 192, 190);
  Level4BallDisplay();
  itHitLevel4();
}

function level9(){
  Level4BallMovement();
  background(190, 192, 190);
  Level4BallDisplay();
  itHitLevel4();
}

function level10(){
  Level4BallMovement();
  background(190, 192, 190);
  Level4BallDisplay();
  itHitLevel4();
}

function level11(){
  Level4BallMovement();
  background(190, 192, 190);
  Level4BallDisplay();
  itHitLevel4();
}

function level12(){
  Level4BallMovement();
  background(190, 192, 190);
  Level4BallDisplay();
  itHitLevel4();
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

function checkCursor(){
  //Similar to the "menu", the mouse and button will change if you hover over the button
  if (state === "main_menu"){
    // During "menu", if the mouse hovers over the play button, the mouse will change from an arrow to a pointer
    // and the play button will light-up (this is due to a change of image with a lighter colour) 
    if ((mouseX > playButton.x - (playButton.width/2)) &&
       (mouseX < playButton.x + (playButton.width/2)) && 
       (mouseY > playButton.y - (playButton.height/2)) && 
       (mouseY < playButton.y + (playButton.height/2))){
  
      cursor("pointer");
      imageMode(CENTER);
      image(playButton.image2, playButton.x, playButton.y, playButton.width, playButton.height);
    }

    else if ((mouseX > instructionButton.x - (instructionButton.width/2)) &&
       (mouseX < instructionButton.x + (instructionButton.width/2)) && 
       (mouseY > instructionButton.y - (instructionButton.height/2)) && 
       (mouseY < instructionButton.y + (instructionButton.height/2))){
  
      cursor("pointer");
      imageMode(CENTER);
      image(instructionButton.image2, instructionButton.x, instructionButton.y, instructionButton.width, instructionButton.height);
    }
  
    else {
      cursor(ARROW); // if the mouse doesn't hover over the button, it remains an arrow
    }
  }
  
  if (state === "menu"){
    if ((mouseX > gridButton.x ) && 
        (mouseX < gridButton.x + gridButton.width) && 
        (mouseY > gridButton.y ) && 
        (mouseY < gridButton.y + gridButton.height)){
      cursor("pointer");
      imageMode(CORNER);
      image(gridButton.image2, gridButton.x, gridButton.y, gridButton.width , gridButton.height)
    }

    if ((mouseX > 30 ) && 
    (mouseX < 330) && 
    (mouseY > 65 ) && 
    (mouseY < 465)){
      cursor ("pointer");

    }

    else {
      cursor(ARROW);
    } 
  }
  if (state === "instructions"){

    if ((mouseX > levelButton.x ) && 
    (mouseX < levelButton.x + levelButton.width) && 
    (mouseY > levelButton.y ) && 
    (mouseY < levelButton.y + levelButton.height)){
      cursor("pointer");
      imageMode(CORNER);
      image(levelButton.image2, levelButton.x, levelButton.y, levelButton.width , levelButton.height)
    }

    else {
      cursor(ARROW);
    } 

  }

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
    state = "main_menu";
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
    state = "main_menu";
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
    state = "main_menu";
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
    state = "main_menu";
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
    state = "main_menu";
  }
}

function mousePressed() {
  //Checks the state, and also if the mouse has clicked a button during that state,
  // if so, it changes the state to a differnt, corresponding state
 checkGridLevel();

 if (state === "main_menu") {
    if (clickedOnButton(mouseX, mouseY)) {
      state = "menu";
    }
    if (clickedOnButtonInstructions(mouseX, mouseY)) {
      state = "instructions";
    }
  }

  if (state === "instructions"){
    if (clickedOnButtonLevel(mouseX, mouseY)) {
      state = "menu";
    }
  }

  if (state === "menu") {
    if (clickedOnButtonAbility(mouseX, mouseY)) {
      state = "levels";
    }
  }
}

function checkGridLevel(){
  let xcoord = floor((mouseX - xOffset)  / cellSize);// makes coordinates on the grid
  let ycoord = floor((mouseY - yOffset)  / cellSize);
  if (state === "menu"){
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
      level = "five";
    } 

    if (xcoord === 2 && ycoord === 1) {
      level = "six";
    } 

    if (xcoord === 0 && ycoord === 2) {
      level = "seven";
    } 

    if (xcoord === 1 && ycoord === 2) {
      level = "eight";
    } 

    if (xcoord === 2 && ycoord === 2) {
      level = "nine";
    } 

    if (xcoord === 0 && ycoord === 3) {
      level = "ten";
    } 

    if (xcoord === 1 && ycoord === 3) {
      level = "eleven";
    } 

    if (xcoord === 2 && ycoord === 3) {
      level = "twelve";
    } 
  }
}

function clickedOnButtonAbility(x, y) {
  // Checks if user clicks on button then, changes state
  if (state === "menu"){
    return x >= gridButton.x &&
     x <= gridButton.x + gridButton.width &&
      y >= gridButton.y &&
      y <= gridButton.y + gridButton.height;
  }
}

function clickedOnButtonLevel(x, y) {
  // Checks if user clicks on button then, changes state
  if (state === "instructions"){
    return x >= levelButton.x &&
     x <= levelButton.x + levelButton.width &&
      y >= levelButton.y &&
      y <= levelButton.y + levelButton.height;
  }
}

function clickedOnButton(x, y) {
  // Checks if user clickes on the play button, if so changes state to "choseLevel"
  return x >= playButton.x - playButton.width/2 && 
  x <= playButton.x + playButton.width/2 && 
  y >= playButton.y - playButton.height/2 && 
  y <= playButton.y + playButton.height/2;
}

function clickedOnButtonInstructions(x, y) {
  // Checks if user clickes on the play button, if so changes state to "choseLevel"
  if (state === "main_menu"){
  return x >= instructionButton.x - instructionButton.width/2 && 
  x <= instructionButton.x + instructionButton.width/2 && 
  y >= instructionButton.y - instructionButton.height/2 && 
  y <= instructionButton.y + instructionButton.height/2;
  }
}


