var snow,snowFlake;
var girl;

function preload(){
  snowFlakeImg = loadImage("snow5.webp")
  snowBg = loadImage("snow2.jpg")
  girl1 = loadImage("Girl1.png")
}
function setup(){
   createCanvas(1000,400)

   //CREATING BACKGROUND
   snow=createSprite(500,25);
   snow.addImage(snowBg);

   girl = createSprite(650,300,10,10);
   girl.scale = 1;
   girl.addImage(girl1)

}
function draw(){
  background(0);

  edges = createEdgeSprites();
  drawSprites();

// CREATING FUNCTION FOR SNOWFLAKES
  function createSnowFlake(){
  snowFall = createSprite(random(50,350),40,10,10);
  snowFall.scale= 0.09;
  snowFall.addImage(snowFlakeImg);
  if (frameCount%80 == 0){
    createSnowFlakes();
  }
  
}

}
