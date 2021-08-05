var iss, spacecraft;
var hasDocked = false;
var space
var bg, issimg, scimg, scimg1,scimg2,scimg3;

function preload() {
  bg = this.loadImage("space.jpg");
  issimg = this.loadImage("iss.png");
  scimg = this.loadImage("spacecraft1.png");
  scimg1 = this.loadImage("spacecraft2.png");
  scimg2 = this.loadImage("spacecraft3.png");
  scimg3 = this.loadImage("spacecraft4.png");
 }

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale =0.15;


  
}

function draw() {
  background(bg);  
  drawSprites();

  if(!hasDocked){
    spacecraft.x += random(-1,1);

    if (keyDown("UP_ARROW")){
      spacecraft.y -= 2
    }

    if (keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1)
     // spacecraft.y += 2
    }

    if (keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg3)
      spacecraft.x -= 2
    }

    if (keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg2)
      spacecraft.x += 2
    }
  }
  if (spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }

}

