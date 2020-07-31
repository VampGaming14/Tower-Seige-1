const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand1,stand2;
var player;
function setup() {
  createCanvas(1300,800);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(750,790,1390,20);
 stand1 = new Ground(700,500,200,10);
 stand2 = new Ground(900,350,200,10);
 block1 = new Block(715,480,30,30);
 block2 = new Block(710,480,30,30);
 block3 = new Block(705,480,30,30);
 block4 = new Block(700,480,30,30);
 block5 = new Block(695,480,30,30);
 block6 = new Block(690,480,30,30);

 block7 = new Block(710,470,30,30);
 block8 = new Block(705,470,30,30);
 block9 = new Block(700,470,30,30);
 block10 = new Block(695,470,30,30);
 block11 = new Block(690,470,30,30);

 block12 = new Block(690,460,30,30);
block13 = new Block(695,460,30,30);
block14 = new Block(700,460,30,30);

block15 = new Block(685,450,30,30);
block16 = new Block(695,450,30,30);

block17 = new Block(690,440,30,30);

block18 = new Block(910,330,30,30);
block19 = new Block(900,330,30,30);
block20 = new Block(895,330,30,30);
block21 = new Block(890,330,30,30);
block22 = new Block(885,330,30,30);
block23 = new Block(880,330,30,30);

block24 = new Block(908,320,30,30);
block25 = new Block(903,320,30,30)
block26 = new Block(898,320,30,30);
block27 = new Block(893,320,30,30);
block28 = new Block(888,320,30,30);

block29 = new Block(905,310,30,30);
block30 = new Block(910,310,30,30);
block31 = new Block(900,310,30,30);
block32 = new Block(895,310,30,30);

block33 = new Block(910,300,30,30);
block34 = new Block(915,300,30,30);
block35 = new Block(905,300,30,30);

block36 = new Block(915,295,30,30);
block37 = new Block(910,295,30,30);

block38 = new Block(913,290,30,30);

striker = new Striker(1000,400,30,40);
sling = new SlingShot(striker.body,{x:50,y:300})
}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();

  striker.display();
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}