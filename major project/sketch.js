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
    this.radius = width/20;
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
    this.radius = 3/50 * width;
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

class PointBall {
  constructor(x, y, dxSomeSpeed, dySomeSpeed) {
    this.x = x;
    this.y = y;
    this.color = [66, 134, 244];
    this.radius = width/50;
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

let playerBall;
let playerBall_2;
let enemyball1Level1;
let enemyball2Level1;
let enemyball3Level1;
let enemyball1Level2;
let enemyball2Level2;
let enemyball3Level2;
let enemyball1Level5;
let enemyball2Level5;
let enemyball3Level5;
let enemyball1Level6;
let enemyball2Level6;
let enemyball3Level6;
let enemyball1Level7;
let enemyball2Level7;
let enemyball3Level7;
let enemyball4Level7;
let enemyball5Level7;
let enemyball6Level7;
let state;
let gridButton;
let gridSizeY = 4;
let gridSizeX = 3;
let cellSize;
let xOffset;
let yOffset;
let level;
let cellPictureWidth;
let cellPictureHeight; 

let timer;
let currentTime;

function preload(){
  soundFormats("mp3");
  bell = loadSound("assets/bell.mp3");
  laugh = loadSound("assets/laugh.mp3")
  sound = loadSound("assets/sound.mp3")
  click = loadSound("assets/click.mp3")
  music = loadSound("assets/backmusic.mp3")
  fire = loadSound("assets/fire (1).mp3")
  tada = loadSound("assets/tada.mp3")
}

function setup() {
  
  sound.setVolume(0.3);
  click.setVolume(0.6)
  music.setVolume(0.2)
  bell.setVolume(0.2)

  if (windowWidth > windowHeight){
    createCanvas (windowHeight, windowHeight);
  }
  else {
    createCanvas (windowWidth, windowWidth);
  }

  cellPictureWidth = 9/50 * width;
  cellPictureHeight = 9/50 * width;

  timer = 0;
  currentTime = -500;

  backgroundImage = loadImage("assets/bckimg.png");
  titleImage = loadImage("assets/title.png")
  spaceImage = loadImage("assets/backgroundpic.png")
  
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

  level1Picture2 = loadImage("assets/1-2.png")
  level2Picture2 = loadImage("assets/2-2.png")
  level3Picture2 = loadImage("assets/3-2.png")
  level4Picture2 = loadImage("assets/4-2.png")
  level5Picture2 = loadImage("assets/5-2.png")
  level6Picture2 = loadImage("assets/6-2.png")
  level7Picture2 = loadImage("assets/7-2.png")
  level8Picture2 = loadImage("assets/8-2.png")
  level9Picture2 = loadImage("assets/9-2.png")
  level10Picture2 = loadImage("assets/10-2.png")
  level11Picture2 = loadImage("assets/11-2.png")
  level12Picture2 = loadImage("assets/12-2.png")
  
  state = "main_menu";//Sets the first state as menu
  
  score = 0;
  lives = 15;

  cellSize = width/5; // Cell size for the grid I'll use
  xOffset = 3/50 * width;
  yOffset = 13/100 * width;
  level = "one" //Variable which will change which power will be used
  txt = "You Finished the Game";  

  playButton = {
    x : width/2,
    y : width/1.8,
    width : 11/25 * width,
    height : 3/20 * width,
    image : loadImage("assets/playbutton.png"),   // Two images, which will switch back and forth when you  
    image2 : loadImage ("assets/playbutton2.png"),// hover the mouse over them
  }

  instructionButton = {
    x : width/2,
    y : 37/50 * width,
    width : 12/25 * width,
    height : 3/20 * width,
    image : loadImage("assets/insbutton.png"),   // Two images, which will switch back and forth when you  
    image2 : loadImage ("assets/insbutton2.png"),// hover the mouse over them
  }

  levelButton = {
    x: width/2,   
    y: width/2,
    width: 3/10 * width,
    height: 3/20 * width,
    image: loadImage("assets/insb.png"),
    image2: loadImage("assets/insb2.png"),
  }
  
  gridButton = {
    x : 73/100 * width,
    y : width/2,
    width : 6/25 * width,
    height : 3/20 * width,
    image : loadImage("assets/go.png"),
    image2 : loadImage("assets/go2.png")
  }

  menuButton = {
    x : width/2,
    y : 11/20 * width,
    width : 3/10 * width,
    height : 3/20 * width,
    image : loadImage("assets/menu.png"),
    image2: loadImage("assets/menu2.png"),
  }

  
  player1 = new PlayerBall(31/500 * width, width/1.5, width/125, 0);
  player2 = new PlayerBall(31/500 * width, width/1.5, width/125, width/125);

  enemyball1Level1 = new EnemyBall(width/5, width/2, 0, 17/500 * width);
  enemyball2Level1 = new EnemyBall(width/2, width/2, 0, 9/500 * width);
  enemyball3Level1 = new EnemyBall(4/5 * width, width/2, 0, width/100);

  enemyball1Level2 = new EnemyBall(width/5, width/2, random(width/125, 7/500 * width), random(width/125, 7/500 * width));
  enemyball2Level2 = new EnemyBall(width/2, width/2, random(width/125, 7/500 * width), random(width/125, 7/500 * width));
  enemyball3Level2 = new EnemyBall(4/5 * width, width/2, random(width/125, 7/500 * width), random(width/125, 7/500 * width));

  enemyball1Level3 = new EnemyBall(width/4.25, width/2, 0, 7/500 * width);
  enemyball2Level3 = new EnemyBall((width / 2.95), width/2, 0, 7/500 * width);
  enemyball3Level3 = new EnemyBall((width / 2.95 + 11/100 * width), width/2, 0, 7/500 * width);
  enemyball4Level3 = new EnemyBall((width / 2.95 + 11/50 * width),width/2, 0, 7/500 * width);
  enemyball5Level3 = new EnemyBall(41/50 * width, width/2, 0, 3/100 * width)

  enemyball1Level4 = new EnemyBall(3/10 * width, width/2, 0, 7/500 * width);
  enemyball2Level4 = new EnemyBall(width/2, width/2, random(3/500 * width, 3/250 * width), random(3/500 * width,3/250 * width));
  enemyball3Level4 = new EnemyBall(7/10 * width, width/2,  0, 7/500 * width);
  
  enemyball1Level5 = new EnemyBall(width/2, width/5, 3/125 * width, 0);
  enemyball2Level5 = new EnemyBall(width/2, width/2, 3/125 * width, 0);
  enemyball3Level5 = new EnemyBall(width/2, 4/5 * width, 3/125 * width, 0);

  enemyball1Level6 = new EnemyBall(width/2, width/2, width/100, -width/100);
  enemyball2Level6 = new EnemyBall(width/2, width/2, 0, 9/500 * width);
  enemyball3Level6 = new EnemyBall(width/2, width/2, width/100, width/100);

  enemyball1Level7 = new EnemyBall(width/5, width/2, 0, 7/500 * width);
  enemyball2Level7 = new EnemyBall(width/2, width/2, 0, 3/125 * width);
  enemyball3Level7 = new EnemyBall(4/5 * width, width/2, 0, 7/500 * width);
  enemyball4Level7 = new EnemyBall(width/2, width/5, 3/125 * width, 0);
  enemyball5Level7 = new EnemyBall(width/2, width/2, 7/500 * width, 0);
  enemyball6Level7 = new EnemyBall(width/2, 4/5 * width, 3/125 * width, 0);

  enemyball1Level8 = new EnemyBall(width/10, 3/50 * width, width/50, 0);
  enemyball2Level8 = new EnemyBall(width/10, 47/50 * width, width/50, 0);
  enemyball3Level8 = new EnemyBall(width/2, width/10, 0, 3/100 * width);

  enemyball1Level9 = new EnemyBall(19/50 * width, 43/100 * width, 0, 0);
  enemyball2Level9 = new EnemyBall(31/50 * width, 43/100 * width, 0, 0);
  enemyball3Level9 = new EnemyBall(31/50 * width, 29/100 * width, 0, 0);
  enemyball4Level9 = new EnemyBall(19/50 * width, 29/100 * width, 0, 0);
  enemyball5Level9 = new EnemyBall(19/50 * width, 67/100 * width, 0, 0);
  enemyball6Level9 = new EnemyBall(31/50 * width, 67/100 * width, 0, 0);
  enemyball7Level9 = new EnemyBall(31/50 * width, 81/100 * width, 0, 0);
  enemyball8Level9 = new EnemyBall(19/50 * width, 81/100 * width, 0, 0);
  enemyball9Level9 = new EnemyBall(417/500 * width, 67/100 * width, 0, 0);
  enemyball10Level9 = new EnemyBall(417/500 * width, 43/100 * width, 0, 0);
  enemyball11Level9 = new EnemyBall(width/10, 7/25 * width, 3/100 * width, 0);
  enemyball12Level9 = new EnemyBall(width/10 , 41/50 * width, 3/100 * width, 0);
  enemyball13Level9 = new EnemyBall(width/2, 21/50 * width, 0, width/50);

  enemyball1Level10 = new EnemyBall(width/5, width/20, 3/125 * width, 0);
  enemyball2Level10 = new EnemyBall(width/5, 2/5 * width, 0, 3/125 * width);
  enemyball3Level10 = new EnemyBall(4/5 * width, 2/5 * width, 0, 3/125 * width);
  enemyball4Level10 = new EnemyBall(width/5, 19/20 * width, 3/125 * width, 0);
  enemyball5Level10 = new EnemyBall(width/2, width/2, 3/250 * width, 3/250 * width);

  enemyball1Level11 = new EnemyBall(11/100 * width, 27/50 * width, 0, 0);
  enemyball2Level11 = new EnemyBall(31/100 * width, 27/50 * width, 0, 0);
  enemyball3Level11 = new EnemyBall(31/100 * width, 79/100 * width, 0, 0);
  enemyball4Level11 = new EnemyBall(11/100 * width, 79/100 * width, 0, 0);
  enemyball5Level11 = new EnemyBall(width/2 + width/20, 27/50 * width, 0, 7/500 * width);
  enemyball6Level11 = new EnemyBall(width/2 - width/20, 27/50 * width, 0, 7/500 * width);
  enemyball7Level11 = new EnemyBall(17/25 * width, 27/50 * width, 0, 0);
  enemyball8Level11 = new EnemyBall(22/25 * width, 27/50 * width, 0, 0);
  enemyball9Level11 = new EnemyBall(17/25 * width, 79/100 * width, 0, 0);
  enemyball10Level11 = new EnemyBall(22/25 * width, 79/100 * width, 0, 0);

  enemyball1Level12 = new EnemyBall(width/20, 27/50 * width, 3/500 * width, 0);
  enemyball2Level12 = new EnemyBall(3/20 * width, 27/50 * width, -3/500 * width, 0);
  enemyball3Level12 = new EnemyBall(width/4, 27/50 * width, 3/500 * width, 0);
  enemyball4Level12 = new EnemyBall(7/20 * width, 27/50 * width, -3/500 * width, 0);
  enemyball5Level12 = new EnemyBall(11/20 * width, 27/50 * width, -3/500 * width, 0);
  enemyball6Level12 = new EnemyBall(13/20 * width, 27/50 * width, 3/500 * width, 0);
  enemyball7Level12 = new EnemyBall(15/20 * width, 27/50 * width, -3/500 * width, 0);
  enemyball8Level12 = new EnemyBall(17/20 * width, 27/50 * width, 3/500 * width, 0);

  enemyball9Level12 = new EnemyBall(width/2, width/2, 0, 9/500 * width);

  point1Level1 = new PointBall (width/1.5, width/1.5, 0, 0);
  point2Level1 = new PointBall (3/10 * width, width/1.5, 0, 0);
  point3Level1 = new PointBall (9/10 * width, width/1.5, 0, 0);

  point1Level2 = new PointBall (3/50 * width, width/1.5, 0, 0);
  point2Level2 = new PointBall (3/10 * width, width/1.5, 0, 0);
  point3Level2 = new PointBall (9/10 * width, width/1.5, 0, 0);

  point1Level3 = new PointBall (2/50 * width, width/1.5, 0, 0);
  point2Level3 = new PointBall (7/10 * width, width/1.5, 0, 0);
  point3Level3 = new PointBall (47/50 * width, width/1.5, 0, 0);

  point1Level4 = new PointBall (width/1.5, width/1.5, 0, 0);
  point2Level4 = new PointBall (3/10 * width, width/1.5, 0, 0);
  point3Level4 = new PointBall (9/10 * width, width/1.5, 0, 0);

  point1Level5 = new PointBall (width/10, 3/50 * width, 0, 0);
  point2Level5 = new PointBall (width/10, 23/25 * width, 0, 0);
  point3Level5 = new PointBall (23/25 * width, width/2, 0, 0);

  point1Level6 = new PointBall (3/50 * width, 3/50 * width, 0, 0);
  point2Level6 = new PointBall (47/50 * width, 47/50 * width, 0, 0);
  point3Level6 = new PointBall (width/2, width/2, 0, 0);

  point1Level7 = new PointBall (47/50 * width, width/10, 0, 0);
  point2Level7 = new PointBall (3/50 * width, width/10, 0, 0);
  point3Level7 = new PointBall (47/50 * width, width/1.5, 0, 0);

  point1Level8 = new PointBall (3/10 * width, 47/50 * width, 0, 0);
  point2Level8 = new PointBall (7/10 * width, 47/50 * width, 0, 0);
  point3Level8 = new PointBall (width/2, width/2, 0, width/100);

  point1Level9 = new PointBall (46/50 * width, 3/20 * width, 0, 0);
  point2Level9 = new PointBall (46/50 * width, 11/20 * width, 0, 0);
  point3Level9 = new PointBall (46/50 * width, 46/50 * width, 0, 0);

  point1Level10 = new PointBall (width/2, width/2, -width/100, width/100);
  point2Level10 = new PointBall (width/20, width/20, 0, 0);
  point3Level10 = new PointBall (19/20 * width, 19/20 * width, 0, 0);

  point1Level11 = new PointBall (width/3, 9/50 * width, 0, 0);
  point2Level11 = new PointBall (width/3, 9/50 * width, 0, 0);
  point3Level11 = new PointBall (9/10 * width, width/1.5, 0, 0);

  point1Level12 = new PointBall (width/20, 13/25 * width, 0, 0);
  point2Level12 = new PointBall (19/20 * width, 13/25 * width, 0, 0);
  point3Level12 = new PointBall (width/2, width/6.75, 0, 0);
}
  
function draw() {
  //Will Draw according to state
  checkStates();
  timeKeeping();
  playMusic();
}

function timeKeeping(){
  if (frameCount % 60 === 0) {
    timer++;
  }
}

// function windowResized(){
//   if (windowWidth > windowHeight){
//     resizeCanvas(windowHeight, windowHeight);
//   }

//   else {
//     resizeCanvas(windowWidth, windowWidth);
//   }
  
// }

function checkStates(){
  // Will check the state at which we currently are and diplay accordingly
  if (state === "main_menu"){
    imageMode(CORNERS);
    background(backgroundImage);
    imageMode(CENTER);
    image(titleImage, width/2, width/5, 22/25 * width, 34/250 * width);
    displayMenu();
    checkCursor();
    restartPositions();
  }

  if (state === "instructions"){
    instructionsText();
    displayInstructionsButton();
    checkCursor();
  }

  if (state === "menu") {
    displayGrid();  
  }

  if (state === "levels") {
    checkLevelScreen();
  }

  if (state === "final_screen"){
    background(135, 198, 209);
    writeText();
    displayEndScreen();
    checkCursor();
  }

}

function writeText(){
  // This function will write something on the scree, the text is already pre-determinate 
  txt2 = "Congratulations"
  textSize(40/500 * width);
  fill("black")
  textAlign(CENTER, CENTER);
  text(txt2, width/2, 13/50 * width)
  text(txt, width/2, 19/50 * width);// "txt" is the variable which holds the string, followed by x and y coordinates
}

function displayEndScreen(){
  imageMode(CENTER);
  image(menuButton.image, menuButton.x, menuButton.y, menuButton.width, menuButton.height);// Super-imposes a picture over that rectangle
}

function instructionsText(){
  let a = "For levels 1 to 4,  you  can use the RIGHT and LEFT" 
  let b = "arrows to move. From level 5 onwards, you can "
  let c = "also use the UP and DOWN arrows. Collect all " 
  let d = "three points to pass to the next level "
  background(197, 160, 229);
  textAlign(CENTER, CENTER);
  textSize(21/500 * width);
  fill("black");

  text (a, width/2, width/5);
  text (b, width/2, 13/50 * width);
  text (c, width/2, 8/25 * width);
  text (d, width/2, 19/50 * width);
}

function displayInstructionsButton(){
  imageMode(CENTER)
  image(levelButton.image, levelButton.x, levelButton.y, levelButton.width, levelButton.height);
}

function restartPositions() {
  player1.x = 31/500 * width;
  player2.x = 31/500 * width;
  player2.y = width/1.5;

  enemyball1Level2.x = width/5;
  enemyball1Level2.y = width/2;
  enemyball2Level2.x = width/2;
  enemyball2Level2.y = width/2;
  enemyball3Level2.x = 4/5 * width;
  enemyball3Level2.y = width/2;

  enemyball1Level5.x = width/2;
  enemyball2Level5.x = width/2;
  enemyball3Level5.x = width/2;

  score = 0;
  lives = 15;

  point1Level1.x = width/1.5
  point2Level1.x = 3/10 * width
  point3Level1.x = 9/10 * width
  
  point1Level2.x = 3/5 * width;
  point2Level2.x = 3/10 * width;
  point3Level2.x = 9/10 * width;

  point1Level3.x = 2/5 * width;
  point2Level3.x = 7/10 * width;
  point3Level3.x = 47/50 * width;

  point1Level4.x = width/1.5;
  point2Level4.x = 3/10 * width;
  point3Level4.x = 9/10 * width;

  point1Level5.x = width/10;
  point2Level5.x = width/10;
  point3Level5.x = 23/25 * width;

  point1Level6.x = 3/50 * width;
  point2Level6.x = 47/50 * width;
  point3Level6.x = width/2;

  point1Level7.x = 47/50 * width;
  point2Level7.x = 3/50 * width;
  point3Level7.x = 47/50 * width;

  point1Level8.x = 3/10 * width;
  point2Level8.x = 7/10 * width;
  point3Level8.x = width/2;

  point1Level9.x = 23/25 * width;
  point2Level9.x = 23/25 * width;
  point3Level9.x = 23/25 * width;

  point1Level10.x = width/2;
  point2Level10.x = width/20;
  point3Level10.x = 19/20 * width

  point1Level11.x = width/3;
  point2Level11.x = width * 2/3;
  point3Level11.x = 9/10 * width;

  point1Level12.x = width/20;
  point2Level12.x = 19/20 * width;
  point3Level12.x = width/2;

  timer = 0;
  currentTime = -500;

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
  image(level1Picture, width/100, width/100, cellPictureWidth , cellPictureHeight);
  image(level2Picture, 1*cellSize + width/100, 0*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level3Picture, 2*cellSize + width/100, 0*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level4Picture, 0*cellSize + width/100, 1*cellSize + width/100, cellPictureWidth , cellPictureHeight );
  image(level5Picture, 1*cellSize + width/100, 1*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level6Picture, 2*cellSize + width/100, 1*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level7Picture, 0*cellSize + width/100, 2*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level8Picture, 1*cellSize + width/100, 2*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level9Picture, 2*cellSize + width/100, 2*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level10Picture, 0*cellSize + width/100, 3*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level11Picture, 1*cellSize + width/100, 3*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  image(level12Picture, 2*cellSize + width/100, 3*cellSize + width/100, cellPictureWidth, cellPictureHeight);
  
  
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

function livesText(){
  fill("white");
  textAlign(CENTER);
  textSize(28/500 * width);
  text("lives = " + str(lives), 430/500 * width, width/10)
}

function checkLevelScreen() {
  //Depending on which power the user chooses, it displays the according screen
  if (level === "one" ) {
    level1();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 1" , width/2, width/10)
    noCursor();
  }
  if (level === "two" ) {
    level2();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 2" , width/2, width/10)
    noCursor();
  }
  if (level === "three" ) {
    level3();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 3" , width/2, width/10)
    noCursor();
  }
  if (level === "four") {
    level4();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 4" , width/2, width/10)
    noCursor();
  }
  if (level === "five") {
    level5();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 5" , width/2, width/10)
    noCursor();
  }
  if (level === "six") {
    level6();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 6" , width/2, width/10)
    noCursor();
  }
  if (level === "seven") {
    level7();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 7" , width/2, width/10)
    noCursor();
  }
  if (level === "eight") {
    level8();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 8" , width/2, width/10)
    noCursor();
  }
  if (level === "nine") {
    level9();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 9" , width/2, width/10)
    noCursor();
  }
  if (level === "ten") {
    level10();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 10" , width/2, width/10)
    noCursor();
  }
  if (level === "eleven") {
    level11();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 11" , width/2, width/10)
    noCursor();
  }
  if (level === "twelve") {
    level12();
    livesText();
    fill("white");
    textAlign(CENTER);
    textSize(28/500 * width);
    text("level 12" , width/2, width/10)
    noCursor();
  }
}

function displayGridButton(){
  imageMode(CORNER)
  image(gridButton.image, gridButton.x, gridButton.y, gridButton.width, gridButton.height)
}

function level1(){
  level1BallMovement();
  background(spaceImage);
  level1BallDisplay();
  itHitLevel1();
  collectingPointsLevel1();
  switchLevel1to2();
}

function level2(){
  level2BallMovement();
  background(spaceImage);
  level2BallDisplay();
  itHitLevel2();
  collectingPointsLevel2();
  switchLevel2to3();
}

function level3(){
  Level3BallMovement();
  background(spaceImage);
  Level3BallDisplay();
  itHitLevel3();
  collectingPointsLevel3();
  switchLevel3to4();
}

function level4(){
  level4BallMovement();
  background(spaceImage);
  level4BallDisplay();
  itHitLevel4();
  collectingPointsLevel4();
  switchLevel4to5();
}

function level5(){
  level5BallMovement();
  background(spaceImage);
  level5BallDisplay();
  itHitLevel5();
  collectingPointsLevel5();
  switchLevel5to6();
}

function level6(){
  Level6BallMovement();
  background(spaceImage);
  Level6BallDisplay();
  itHitLevel6();
  collectingPointsLevel6();
  switchLevel6to7();
}

function level7(){
  Level7BallMovement();
  background(spaceImage);
  Level7BallDisplay();
  itHitLevel7();
  collectingPointsLevel7();
  switchLevel7to8();
}

function level8(){
  Level8BallMovement();
  background(spaceImage);
  Level8BallDisplay();
  itHitLevel8();
  collectingPointsLevel8();
  switchLevel8to9();
}

function level9(){
  Level9BallMovement();
  background(spaceImage);
  Level9BallDisplay();
  itHitLevel9();
  collectingPointsLevel9();
  switchLevel9to10();
}

function level10(){
  Level10BallMovement();
  background(spaceImage);
  Level10BallDisplay();
  itHitLevel10();
  collectingPointsLevel10();
  switchLevel10to11();
}

function level11(){
  Level11BallMovement();
  background(spaceImage);
  Level11BallDisplay();
  itHitLevel11();
  collectingPointsLevel11();
  switchLevel11to12();
}

function level12(){
  Level12BallMovement();
  background(spaceImage);
  Level12BallDisplay();
  itHitLevel12();
  collectingPointsLevel12();
  switchLevel12();
}

function nextLevelText(){
  fill("white");
  textAlign(CENTER);
  textSize(7/125 * width);
  text("Going to the Next Level", width/2, 2/5 * width);
  text("in " + str(3 - (timer - currentTime)) + " second(s)", width/2, 27/50 * width);
}

function level1BallMovement() {
  point1Level1.move();
  point2Level1.move();
  point3Level1.move();
  enemyball1Level1.move();
  enemyball2Level1.move();
  enemyball3Level1.move(); 
  player1.move(); 
}

function level1BallDisplay(){
  point1Level1.display();
  point2Level1.display();
  point3Level1.display();
  enemyball1Level1.display();
  enemyball2Level1.display();
  enemyball3Level1.display();
  player1.display();
}

function switchLevel1to2(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {
      level = "two";
      score = 0;
      player1.x = 31/500 * width;
      currentTime = -500;
    }
  }
}

function level2BallMovement() {
  point1Level2.move();
  point2Level2.move();
  point3Level2.move();
  enemyball1Level2.move();
  enemyball2Level2.move();
  enemyball3Level2.move();
  player1.move();
  
}

function level2BallDisplay(){
  point1Level2.display();
  point2Level2.display();
  point3Level2.display();
  enemyball1Level2.display();
  enemyball2Level2.display();
  enemyball3Level2.display();
  player1.display();
}

function switchLevel2to3(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "three";
     score = 0;
     player1.x = 31/500 * width;
     currentTime = -500;
    }
  }
}

function Level3BallMovement(){
  point1Level3.move();
  point2Level3.move();
  point3Level3.move();
  enemyball1Level3.move();
  enemyball2Level3.move();
  enemyball3Level3.move();
  enemyball4Level3.move();
  enemyball5Level3.move();
  player1.move();
}

function Level3BallDisplay(){
  point1Level3.display();
  point2Level3.display();
  point3Level3.display();
  player1.display();
  enemyball1Level3.display();
  enemyball2Level3.display();
  enemyball3Level3.display();
  enemyball4Level3.display();
  enemyball5Level3.display();
}

function switchLevel3to4(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "four";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function level4BallMovement(){
  point1Level4.move();
  point2Level4.move();
  point3Level4.move();
  enemyball1Level4.move();
  enemyball2Level4.move();
  enemyball3Level4.move();
  player1.move();
}

function level4BallDisplay(){
  point1Level4.display();
  point2Level4.display();
  point3Level4.display();
  enemyball1Level4.display();
  enemyball2Level4.display();
  enemyball3Level4.display();
  player1.display();
}

function switchLevel4to5(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "five";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function level5BallMovement() {
  point1Level5.move();
  point2Level5.move();
  point3Level5.move();
  enemyball1Level5.move();
  enemyball2Level5.move();
  enemyball3Level5.move();
  player2.move();
}

function level5BallDisplay(){
  point1Level5.display();
  point2Level5.display();
  point3Level5.display();
  enemyball1Level5.display();
  enemyball2Level5.display();
  enemyball3Level5.display();
  player2.display();
}

function switchLevel5to6(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "six";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function Level6BallMovement() {
  point1Level6.move();
  point2Level6.move();
  point3Level6.move();
  enemyball1Level6.move();
  enemyball2Level6.move();
  enemyball3Level6.move();
  player2.move();
}

function Level6BallDisplay(){
  point1Level6.display();
  point2Level6.display();
  point3Level6.display();
  enemyball1Level6.display();
  enemyball2Level6.display();
  enemyball3Level6.display();
  player2.display();
}

function switchLevel6to7(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "seven";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function Level7BallMovement() {
  point1Level7.move();
  point2Level7.move();
  point3Level7.move();
  enemyball1Level7.move();
  enemyball2Level7.move();
  enemyball3Level7.move();
  enemyball4Level7.move();
  enemyball5Level7.move();
  enemyball6Level7.move();
  player2.move();
}

function Level7BallDisplay(){
  point1Level7.display();
  point2Level7.display();
  point3Level7.display();
  enemyball1Level7.display();
  enemyball2Level7.display();
  enemyball3Level7.display();
  enemyball4Level7.display();
  enemyball5Level7.display();
  enemyball6Level7.display();
  player2.display();
}

function switchLevel7to8(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "eight";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function Level8BallMovement(){
  point1Level8.move();
  point2Level8.move();
  point3Level8.move();
  enemyball1Level8.move();
  enemyball2Level8.move();
  enemyball3Level8.move();
  player2.move();
}

function Level8BallDisplay(){
  point1Level8.display();
  point2Level8.display();
  point3Level8.display();
  enemyball1Level8.display();
  enemyball2Level8.display();
  enemyball3Level8.display();
  player2.display();
}

function switchLevel8to9(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "nine";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function Level9BallMovement(){
  point1Level9.move();
  point2Level9.move();
  point3Level9.move();
  enemyball1Level9.move();
  enemyball2Level9.move();
  enemyball3Level9.move();
  enemyball4Level9.move();
  enemyball5Level9.move();
  enemyball6Level9.move();
  enemyball7Level9.move();
  enemyball8Level9.move();
  enemyball9Level9.move();
  enemyball10Level9.move();
  enemyball11Level9.move();
  enemyball12Level9.move();
  enemyball13Level9.move();
  player2.move();
}

function Level9BallDisplay(){
  point1Level9.display();
  point2Level9.display();
  point3Level9.display();
  enemyball1Level9.display();
  enemyball2Level9.display();
  enemyball3Level9.display();
  enemyball4Level9.display();
  enemyball5Level9.display();
  enemyball6Level9.display();
  enemyball7Level9.display();
  enemyball8Level9.display();
  enemyball9Level9.display();
  enemyball10Level9.display();
  enemyball11Level9.display();
  enemyball12Level9.display();
  enemyball13Level9.display();
  player2.display();
}

function switchLevel9to10(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "ten";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function Level10BallMovement(){
  point1Level10.move();
  point2Level10.move();
  point3Level10.move();
  enemyball1Level10.move();
  enemyball2Level10.move();
  enemyball3Level10.move();
  enemyball4Level10.move();
  enemyball5Level10.move();
  player2.move();
}

function Level10BallDisplay(){  
  point1Level10.display();
  point2Level10.display();
  point3Level10.display();
  enemyball1Level10.display();
  enemyball2Level10.display();
  enemyball3Level10.display();
  enemyball4Level10.display();
  enemyball5Level10.display();
  player2.display();
}

function switchLevel10to11(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();
    if (3 - (timer - currentTime) === 0 ) {

     level = "eleven";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function Level11BallMovement(){
  point1Level11.move();
  point2Level11.move();
  point3Level11.move();
  enemyball1Level11.move();
  enemyball2Level11.move();
  enemyball3Level11.move();
  enemyball4Level11.move();
  enemyball5Level11.move();
  enemyball6Level11.move();
  enemyball7Level11.move();
  enemyball8Level11.move();
  enemyball9Level11.move();
  enemyball10Level11.move();
  player2.move();
}

function Level11BallDisplay(){
  point1Level11.display();
  point2Level11.display();
  point3Level11.display();
  enemyball1Level11.display();
  enemyball2Level11.display();
  enemyball3Level11.display();
  enemyball4Level11.display();
  enemyball5Level11.display();
  enemyball6Level11.display();
  enemyball7Level11.display();
  enemyball8Level11.display();
  enemyball9Level11.display();
  enemyball10Level11.display();
  player2.display();
}

function switchLevel11to12(){
  if (score === 3) {
    if (currentTime === -500) {
      currentTime = timer;
    }
    nextLevelText();

    if (3 - (timer - currentTime) === 0 ) {

     level = "twelve";
     score = 0;
     player1.x = 31/500 * width;
     player2.x = 31/500 * width;
     player2.y = width/1.5;
     currentTime = -500;
    }
  }
}

function Level12BallMovement(){
  point1Level12.move();
  point2Level12.move();
  point3Level12.move();
  enemyball1Level12.move();
  enemyball2Level12.move();
  enemyball3Level12.move();
  enemyball4Level12.move();
  enemyball5Level12.move();
  enemyball6Level12.move();
  enemyball7Level12.move();
  enemyball8Level12.move();
  enemyball9Level12.move();
  player2.move();
}

function Level12BallDisplay(){
  point1Level12.display();
  point2Level12.display();
  point3Level12.display();
  enemyball1Level12.display();
  enemyball2Level12.display();
  enemyball3Level12.display();
  enemyball4Level12.display();
  enemyball5Level12.display();
  enemyball6Level12.display();
  enemyball7Level12.display();
  enemyball8Level12.display();
  enemyball9Level12.display();
  player2.display();
}

function switchLevel12(){
  if (score === 3) {
    state = "final_screen"
  }
}

function moveAgain(){
  player1.dx = width/125;
  player2.dx = width/125;
  player2.dy = width/125;
  
}

function itHitLevel1() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player1.x, player1.y, enemyball1Level1.x, enemyball1Level1.y));                   
  distanceAwayFromCenter2 = int(dist(player1.x, player1.y, enemyball2Level1.x, enemyball2Level1.y));
  distanceAwayFromCenter3 = int(dist(player1.x, player1.y, enemyball3Level1.x, enemyball3Level1.y));
  
  collitionDistance = (player1.radius + enemyball1Level1.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance)  {
    if (lives > 0 && score !== 3){
      lives --
      laugh.play();
      player1.x = 31/500 * width;
      player1.dx = 0;
      setTimeout(moveAgain, 800)
    }
    else if (lives === 0){
      state = "main_menu"
    }
  }
}

function collectingPointsLevel1() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  ballDistanceToPoint1 = int(dist(player1.x, player1.y, point1Level1.x, point1Level1.y));                   
  ballDistanceToPoint2 = int(dist(player1.x, player1.y,  point2Level1.x, point2Level1.y));
  ballDistanceToPoint3 = int(dist(player1.x, player1.y, point3Level1.x, point3Level1.y));
  
  collectionDistance = (player1.radius + point1Level1.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level1.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level1.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level1.x = -width/5;
    score ++;
    bell.play();
  }
}

function itHitLevel2() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player1.x, player1.y, enemyball1Level2.x, enemyball1Level2.y));                   
  distanceAwayFromCenter2 = int(dist(player1.x, player1.y, enemyball2Level2.x, enemyball2Level2.y));
  distanceAwayFromCenter3 = int(dist(player1.x, player1.y, enemyball3Level2.x, enemyball3Level2.y));
  
  collitionDistance = (player1.radius + enemyball1Level2.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance)  {
      if (lives > 0 && score !== 3){
        lives --
        laugh.play();
        level = "three"
        level = "two"
        enemyball1Level2.y = 3/50 * width;
        enemyball2Level2.y = 3/50 * width;
        enemyball3Level2.y = 3/50 * width;
        enemyball1Level2.x = width/5;
        enemyball2Level2.x = width/2;
        enemyball3Level2.x = 400/500 * width;
        enemyball1Level2.dx = 0;
        enemyball1Level2.dy = 0;
        enemyball2Level2.dx = 0;
        enemyball2Level2.dy = 0;
        enemyball3Level2.dx = 0;
        enemyball3Level2.dy = 0;

        player1.x = 31/500 * width;
        player1.dx = 0;
        setTimeout(moveAgain, 900)
        setTimeout(startLevel2, 909);
      }
    
      else if (lives === 0){
      state = "main_menu"
    }
  }
}

function startLevel2(){
  enemyball1Level2.dx = random(width/125, 7/500 * width);
  enemyball1Level2.dy = random(width/125, 7/500 * width);
  enemyball2Level2.dx = random(width/125, 7/500 * width);
  enemyball2Level2.dy = random(width/125, 7/500 * width);
  enemyball3Level2.dx = random(width/125, 7/500 * width);
  enemyball3Level2.dy = random(width/125, 7/500 * width);

}

function collectingPointsLevel2() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player1.x, player1.y, point1Level2.x, point1Level2.y));                   
  ballDistanceToPoint2 = int(dist(player1.x, player1.y,  point2Level2.x, point2Level2.y));
  ballDistanceToPoint3 = int(dist(player1.x, player1.y, point3Level2.x, point3Level2.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level2.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level2.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level2.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel3() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player1.x, player1.y, enemyball1Level3.x, enemyball1Level3.y));                   
  distanceAwayFromCenter2 = int(dist(player1.x, player1.y, enemyball2Level3.x, enemyball2Level3.y));
  distanceAwayFromCenter3 = int(dist(player1.x, player1.y, enemyball3Level3.x, enemyball3Level3.y));
  distanceAwayFromCenter4 = int(dist(player1.x, player1.y, enemyball4Level3.x, enemyball4Level3.y));
  distanceAwayFromCenter5 = int(dist(player1.x, player1.y, enemyball5Level3.x, enemyball5Level3.y));
  
  collitionDistance = (player1.radius + enemyball1Level7.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance ||
      distanceAwayFromCenter4  <= collitionDistance ||
      distanceAwayFromCenter5  <= collitionDistance)  {
    if (lives > 0 && score !== 3){
      lives --
      laugh.play();
      player1.x = 31/500 * width;
      player1.dx = 0;
      setTimeout(moveAgain, 800)
    }
    else if (lives === 0){
      state = "main_menu"
    }
  }
}

function collectingPointsLevel3() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player1.x, player1.y, point1Level3.x, point1Level3.y));                   
  ballDistanceToPoint2 = int(dist(player1.x, player1.y,  point2Level3.x, point2Level3.y));
  ballDistanceToPoint3 = int(dist(player1.x, player1.y, point3Level3.x, point3Level3.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level3.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level3.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level3.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel4() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player1.x, player1.y, enemyball1Level4.x, enemyball1Level4.y));                   
  distanceAwayFromCenter2 = int(dist(player1.x, player1.y, enemyball2Level4.x, enemyball2Level4.y));
  distanceAwayFromCenter3 = int(dist(player1.x, player1.y, enemyball3Level4.x, enemyball3Level4.y));
  
  collitionDistance = (player1.radius + enemyball1Level2.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance)  {
    if (lives > 0 && score !== 3){
      lives --
      laugh.play();
      player1.x = 31/500 * width;
      player1.dx = 0;
      enemyball1Level4.y = 3/50 * width;
      enemyball2Level4.y = 3/50 * width;
      enemyball3Level4.y = 3/50 * width;
      setTimeout(moveAgain, 800)
    }
    else if (lives === 0){
      state = "main_menu"
    }
  }
}

function collectingPointsLevel4() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player1.x, player1.y, point1Level4.x, point1Level4.y));                   
  ballDistanceToPoint2 = int(dist(player1.x, player1.y,  point2Level4.x, point2Level4.y));
  ballDistanceToPoint3 = int(dist(player1.x, player1.y, point3Level4.x, point3Level4.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level4.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level4.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level4.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel5() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level5.x, enemyball1Level5.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level5.x, enemyball2Level5.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level5.x, enemyball3Level5.y));
  
  collitionDistance = (player1.radius + enemyball1Level1.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance)  {
    if (lives > 0 && score !== 3){
      lives --
      laugh.play();
      player2.x = 31/500 * width;
      player2.y = width/1.5
      player2.dx = 0;
      player2.dy = 0;
      setTimeout(moveAgain, 800)
    }
    else if (lives === 0){
      state = "main_menu"
    }
  }
}

function collectingPointsLevel5() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player2.x, player2.y, point1Level5.x, point1Level5.y));                   
  ballDistanceToPoint2 = int(dist(player2.x, player2.y,  point2Level5.x, point2Level5.y));
  ballDistanceToPoint3 = int(dist(player2.x, player2.y, point3Level5.x, point3Level5.y));
  
  collectionDistance = (player2.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level5.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level5.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level5.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel6() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level6.x, enemyball1Level6.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level6.x, enemyball2Level6.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level6.x, enemyball3Level6.y));
  
  collitionDistance = (player1.radius + enemyball1Level6.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance)  {
        if (lives > 0 && score !== 3){
          lives --
          laugh.play();
          player2.x = 31/500 * width;
          player2.y = width/1.5
          player2.dx = 0;
          player2.dy = 0;
          setTimeout(moveAgain, 800)
        }
        else if (lives === 0){
          state = "main_menu"
        }
  }
}

function collectingPointsLevel6() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player2.x, player2.y, point1Level6.x, point1Level6.y));                   
  ballDistanceToPoint2 = int(dist(player2.x, player2.y,  point2Level6.x, point2Level6.y));
  ballDistanceToPoint3 = int(dist(player2.x, player2.y, point3Level6.x, point3Level6.y));
  
  collectionDistance = (player2.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level6.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level6.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level6.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel7() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level7.x, enemyball1Level7.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level7.x, enemyball2Level7.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level7.x, enemyball3Level7.y));
  distanceAwayFromCenter4 = int(dist(player2.x, player2.y, enemyball4Level7.x, enemyball4Level7.y));                   
  distanceAwayFromCenter5 = int(dist(player2.x, player2.y, enemyball5Level7.x, enemyball5Level7.y));
  distanceAwayFromCenter6 = int(dist(player2.x, player2.y, enemyball6Level7.x, enemyball6Level7.y));
  
  collitionDistance = (player2.radius + enemyball1Level6.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance ||
      distanceAwayFromCenter4 <= collitionDistance ||
      distanceAwayFromCenter5 <= collitionDistance ||
      distanceAwayFromCenter6 <= collitionDistance) {
        if (lives > 0 && score !== 3){
          lives --
          laugh.play();
          player2.x = 31/500 * width;
          player2.y = width/1.5
          player2.dx = 0;
          player2.dy = 0;
          setTimeout(moveAgain, 800)
        }
        else if (lives === 0){
          state = "main_menu"
        }
  }
}

function collectingPointsLevel7() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player2.x, player2.y, point1Level7.x, point1Level7.y));                   
  ballDistanceToPoint2 = int(dist(player2.x, player2.y,  point2Level7.x, point2Level7.y));
  ballDistanceToPoint3 = int(dist(player2.x, player2.y, point3Level7.x, point3Level7.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level7.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level7.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level7.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel8(){
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level8.x, enemyball1Level8.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level8.x, enemyball2Level8.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level8.x, enemyball3Level8.y));
  
  collitionDistance = (player1.radius + enemyball1Level1.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance)  {
        if (lives > 0 && score !== 3){
          lives --
          laugh.play();
          player2.x = 31/500 * width;
          player2.y = width/1.5
          player2.dx = 0;
          player2.dy = 0;
          setTimeout(moveAgain, 800)
        }
        else if (lives === 0){
          state = "main_menu"
        }
  }

}

function collectingPointsLevel8() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player2.x, player2.y, point1Level8.x, point1Level8.y));                   
  ballDistanceToPoint2 = int(dist(player2.x, player2.y,  point2Level8.x, point2Level8.y));
  ballDistanceToPoint3 = int(dist(player2.x, player2.y, point3Level8.x, point3Level8.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level8.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level8.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level8.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel9(){
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level9.x, enemyball1Level9.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level9.x, enemyball2Level9.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level9.x, enemyball3Level9.y));
  distanceAwayFromCenter4 = int(dist(player2.x, player2.y, enemyball4Level9.x, enemyball4Level9.y));                   
  distanceAwayFromCenter5 = int(dist(player2.x, player2.y, enemyball5Level9.x, enemyball5Level9.y));
  distanceAwayFromCenter6 = int(dist(player2.x, player2.y, enemyball6Level9.x, enemyball6Level9.y));
  distanceAwayFromCenter7 = int(dist(player2.x, player2.y, enemyball7Level9.x, enemyball7Level9.y));                   
  distanceAwayFromCenter8 = int(dist(player2.x, player2.y, enemyball8Level9.x, enemyball8Level9.y));
  distanceAwayFromCenter9 = int(dist(player2.x, player2.y, enemyball9Level9.x, enemyball9Level9.y));
  distanceAwayFromCenter10 = int(dist(player2.x, player2.y, enemyball10Level9.x, enemyball10Level9.y));                   
  distanceAwayFromCenter11 = int(dist(player2.x, player2.y, enemyball11Level9.x, enemyball11Level9.y));
  distanceAwayFromCenter12 = int(dist(player2.x, player2.y, enemyball12Level9.x, enemyball12Level9.y));
  distanceAwayFromCenter13 = int(dist(player2.x, player2.y, enemyball13Level9.x, enemyball13Level9.y));

  collitionDistance = (player1.radius + enemyball1Level1.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance ||
      distanceAwayFromCenter4  <= collitionDistance ||
      distanceAwayFromCenter5 <= collitionDistance || 
      distanceAwayFromCenter6  <= collitionDistance ||
      distanceAwayFromCenter7  <= collitionDistance ||
      distanceAwayFromCenter8 <= collitionDistance || 
      distanceAwayFromCenter9  <= collitionDistance ||
      distanceAwayFromCenter10  <= collitionDistance ||
      distanceAwayFromCenter11 <= collitionDistance || 
      distanceAwayFromCenter12  <= collitionDistance ||
      distanceAwayFromCenter13  <= collitionDistance)  {
        if (lives > 0 && score !== 3){
          lives --
          laugh.play();
          player2.x = 31/500 * width;
          player2.y = width/1.5
          player2.dx = 0;
          player2.dy = 0;
          setTimeout(moveAgain, 800)
        }
        else if (lives === 0){
          state = "main_menu"
        }
  }  
}

function collectingPointsLevel9() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player2.x, player2.y, point1Level9.x, point1Level9.y));                   
  ballDistanceToPoint2 = int(dist(player2.x, player2.y,  point2Level9.x, point2Level9.y));
  ballDistanceToPoint3 = int(dist(player2.x, player2.y, point3Level9.x, point3Level9.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level9.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level9.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level9.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel10(){
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level10.x, enemyball1Level10.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level10.x, enemyball2Level10.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level10.x, enemyball3Level10.y));
  distanceAwayFromCenter4 = int(dist(player2.x, player2.y, enemyball4Level10.x, enemyball4Level10.y));                   
  distanceAwayFromCenter5 = int(dist(player2.x, player2.y, enemyball5Level10.x, enemyball5Level10.y));

  collitionDistance = (player1.radius + enemyball1Level1.radius);

  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance ||
      distanceAwayFromCenter4  <= collitionDistance ||
      distanceAwayFromCenter5 <= collitionDistance)  {
        if (lives > 0 && score !== 3){
          lives --
          laugh.play();
          player2.x = 31/500 * width;
          player2.y = width/1.5
          player2.dx = 0;
          player2.dy = 0;
          setTimeout(moveAgain, 800)
        }
        else if (lives === 0){
          state = "main_menu"
        }
  }
}

function collectingPointsLevel10() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player2.x, player2.y, point1Level10.x, point1Level10.y));                   
  ballDistanceToPoint2 = int(dist(player2.x, player2.y,  point2Level10.x, point2Level10.y));
  ballDistanceToPoint3 = int(dist(player2.x, player2.y, point3Level10.x, point3Level10.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level10.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level10.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level10.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel11(){
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level11.x, enemyball1Level11.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level11.x, enemyball2Level11.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level11.x, enemyball3Level11.y));
  distanceAwayFromCenter4 = int(dist(player2.x, player2.y, enemyball4Level11.x, enemyball4Level11.y));                   
  distanceAwayFromCenter5 = int(dist(player2.x, player2.y, enemyball5Level11.x, enemyball5Level11.y));
  distanceAwayFromCenter6 = int(dist(player2.x, player2.y, enemyball6Level11.x, enemyball6Level11.y));                   
  distanceAwayFromCenter7 = int(dist(player2.x, player2.y, enemyball7Level11.x, enemyball7Level11.y));
  distanceAwayFromCenter8 = int(dist(player2.x, player2.y, enemyball8Level11.x, enemyball8Level11.y));
  distanceAwayFromCenter9 = int(dist(player2.x, player2.y, enemyball9Level11.x, enemyball9Level11.y));                   
  distanceAwayFromCenter10 = int(dist(player2.x, player2.y, enemyball10Level11.x, enemyball10Level11.y));

  collitionDistance = (player1.radius + enemyball1Level1.radius);

  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance ||
      distanceAwayFromCenter4  <= collitionDistance ||
      distanceAwayFromCenter5 <= collitionDistance ||
      distanceAwayFromCenter6  <= collitionDistance ||
      distanceAwayFromCenter7 <= collitionDistance || 
      distanceAwayFromCenter8  <= collitionDistance ||
      distanceAwayFromCenter9  <= collitionDistance ||
      distanceAwayFromCenter10 <= collitionDistance )  {
        if (lives > 0 && score !== 3){
          lives --
          laugh.play();
          player2.x = 31/500 * width;
          player2.y = width/1.5
          player2.dx = 0;
          player2.dy = 0;
          setTimeout(moveAgain, 800)
        }
        else if (lives === 0){
          state = "main_menu"
        }
  }
}

function collectingPointsLevel11() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player2.x, player2.y, point1Level11.x, point1Level11.y));                   
  ballDistanceToPoint2 = int(dist(player2.x, player2.y,  point2Level11.x, point2Level11.y));
  ballDistanceToPoint3 = int(dist(player2.x, player2.y, point3Level11.x, point3Level11.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level11.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level11.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level11.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function itHitLevel12(){
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level12.x, enemyball1Level12.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level12.x, enemyball2Level12.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level12.x, enemyball3Level12.y));
  distanceAwayFromCenter4 = int(dist(player2.x, player2.y, enemyball4Level12.x, enemyball4Level12.y));                   
  distanceAwayFromCenter5 = int(dist(player2.x, player2.y, enemyball5Level12.x, enemyball5Level12.y));
  distanceAwayFromCenter6 = int(dist(player2.x, player2.y, enemyball6Level12.x, enemyball6Level12.y));                   
  distanceAwayFromCenter7 = int(dist(player2.x, player2.y, enemyball7Level12.x, enemyball7Level12.y));
  distanceAwayFromCenter8 = int(dist(player2.x, player2.y, enemyball8Level12.x, enemyball8Level12.y));
  distanceAwayFromCenter9 = int(dist(player2.x, player2.y, enemyball9Level12.x, enemyball9Level12.y));                   


  collitionDistance = (player1.radius + enemyball1Level1.radius);

  if (distanceAwayFromCenter1  <= collitionDistance ||
      distanceAwayFromCenter2 <= collitionDistance || 
      distanceAwayFromCenter3  <= collitionDistance ||
      distanceAwayFromCenter4  <= collitionDistance ||
      distanceAwayFromCenter5 <= collitionDistance ||
      distanceAwayFromCenter6  <= collitionDistance ||
      distanceAwayFromCenter7 <= collitionDistance || 
      distanceAwayFromCenter8  <= collitionDistance ||
      distanceAwayFromCenter9  <= collitionDistance )  {
        if (lives > 0 && score !== 3){
          lives --
          laugh.play();
          player2.x = 31/500 * width;
          player2.y = width/1.5
          player2.dx = 0;
          player2.dy = 0;
          setTimeout(moveAgain, 800)
        }
        else if (lives === 0){
          state = "main_menu"
        }
  }
}

function collectingPointsLevel12() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  
  ballDistanceToPoint1 = int(dist(player2.x, player2.y, point1Level12.x, point1Level12.y));                   
  ballDistanceToPoint2 = int(dist(player2.x, player2.y,  point2Level12.x, point2Level12.y));
  ballDistanceToPoint3 = int(dist(player2.x, player2.y, point3Level12.x, point3Level12.y));
  
  collectionDistance = (player1.radius + point1Level2.radius);
  
  if (ballDistanceToPoint1  <= collectionDistance )  {
    point1Level12.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint2 <= collectionDistance )  {
    point2Level12.x = -width/5;
    score ++;
    bell.play();
  }
  if (ballDistanceToPoint3  <= collectionDistance)  {
    point3Level12.x = -width/5;
    score ++;
    bell.play();
  }
  
}

function mousePressed() {
  //Checks the state, and also if the mouse has clicked a button during that state,
  // if so, it changes the state to a differnt, corresponding state
 checkGridLevel();

 if (state === "main_menu") {
    if (clickedOnButton(mouseX, mouseY)) {
      click.play();
      state = "menu";
    }
    if (clickedOnButtonInstructions(mouseX, mouseY)) {
      state = "instructions";
    }
  }

  if (state === "instructions"){
    if (clickedOnButtonLevel(mouseX, mouseY)) {
      click.play();
      state = "menu";
    }
  }

  if (state === "menu") {
    if (clickedOnButtonAbility(mouseX, mouseY)) {
      click.play();
      state = "levels";
    }
  }

  if (state === "final_screen"){
    if (clickedOnButtonMenu (mouseX, mouseY) ) {
      click.play();
      state = "main_menu";
    }
  }
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

    else if ((mouseX > 3/50 * width ) && 
    (mouseX < 33/50 * width) && 
    (mouseY > 13/100 * width ) && 
    (mouseY < 93/100 * width)){
      cursor ("pointer");
    }

    else {
      cursor(ARROW);
    } 
  }
  if (state === "instructions"){

    if ((mouseX > levelButton.x - levelButton.width/2 ) && 
    (mouseX < levelButton.x + levelButton.width/2) && 
    (mouseY > levelButton.y - levelButton.height/2 ) && 
    (mouseY < levelButton.y + levelButton.height/2)){
      cursor("pointer");
      
      
      imageMode(CENTER);
      image(levelButton.image2, levelButton.x, levelButton.y, levelButton.width , levelButton.height)
    }

    else {
      cursor(ARROW);
    } 
  }

  if (state === "final_screen"){
    if ((mouseX > menuButton.x - (menuButton.width/2)) 
    && (mouseX < menuButton.x + (menuButton.width/2)) 
    && (mouseY > menuButton.y - (menuButton.height/2)) 
    && (mouseY < menuButton.y + (menuButton.height/2))){
      cursor("pointer");
      
      
      imageMode(CENTER);
      image(menuButton.image2, menuButton.x, menuButton.y, menuButton.width, menuButton.height);
   }

    else {
      cursor(ARROW);
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
    return x >= levelButton.x - levelButton.width/2 &&
     x <= levelButton.x + levelButton.width/2 &&
      y >= levelButton.y - levelButton.height/2 &&
      y <= levelButton.y + levelButton.height/2 ;
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

function clickedOnButtonMenu(x,y){
  return x >= menuButton.x - menuButton.width/2 && 
         x <= menuButton.x + menuButton.width/2 && 
         y >= menuButton.y - menuButton.height/2 && 
         y <= menuButton.y + menuButton.height/2;
}

function playMusic(){
  if ((state === "main_menu" || state === "menu" ) && !sound.isPlaying()) {
    sound.loop();
  }
  if (state !== "main_menu" && state !== "menu" ){
    sound.stop();
  }
 
  if (state === "levels" && !music.isPlaying()){
    music.loop();
  }
  if (state !== "levels"){
    music.stop();
  }
  if (state === "final_screen" && !fire.isPlaying() && !tada.isPlaying()){
    fire.play();
    tada.play();
  }
  if (state !== "final_screen"){
    fire.stop();
    tada.stop();
  }
}