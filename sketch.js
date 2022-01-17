var form,game,player;
var bg1
var bg2

function preload(){
    bg1 = loadImage("/Images/bg1.jfif")
    bg2 = loadImage("/Images/background.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight)
game= new Game();
game.getState()
game.start()

}

function draw(){
    background(bg1)
}
