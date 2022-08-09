var canvas;
var backgroundImage;
var myform,myplayer,mygame
var myplayerCount,mygameState
var database
var car1Image,car2Image,car1,car2,trackImage
var cars=[]
var allPlayers
var fuelImage,coinsImage

var fuelGroup,conisGroup
var obsticle1Group,obstic2e1Group
var obsticle1Image,obsticle2Image

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image=loadImage("./assets/car1.png")
  car2Image=loadImage("./assets/car2.png")
  trackImage=loadImage("./assets/track.jpg")
  fuelImage=loadImage("./assets/fuel.png")
  coinsImage=loadImage("./assets/goldCoin.png")
obsticle1Image=loadImage("./assets/obstacle1.png")
obsticle2Image=loadImage("./assets/obstacle2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  mygame= new Game()
  mygame.start()


  mygame.getState()

}

function draw() {
  background(backgroundImage);

  if(myplayerCount ===2){
    mygame.updateState(1)
  }


  if(mygameState === 1){
   mygame.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
