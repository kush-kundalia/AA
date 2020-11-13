var car , wall , speed , weight;
var deformation;
function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  var car = createSprite(400, 200, 50, 50);
  var wall = createSprite(1500,200,60,30);
}

function draw() {
  background(0); 
 car.VelocityX=speed;
if(wall.x-car.x < (car.width+wall.width)/2){
  car.VelocityX=0;
  var deformation = 0.5 * weight * speed * speed/22500;
  if (deformation>180){
    car.shapeColor = color (225 , 0 , 0);

  }
  if(deformation < 180 && deformation > 100){
car.shapeColor=color(230,230,0);

  }
  if(deformation<100){
    car.shapeColor= color (0 , 255 , 0);
  }
}
  drawSprites();
}