var rect1,rect2,rect3,pb,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 640);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	pb = new Paper(200,200);
	rect1 = new bin(870,550,20,300);
	rect3 = new bin(1080,550,20,300);
	rect2 = new binimg(980,590,200,20);
	
	ground = new Ground(600,620,1200,50)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  pb.display();
  rect1.display();
  rect3.display();
  rect2.display();
  ground.display();
  
  if(keyWentDown(UP_ARROW)){
	  Matter.Body.applyForce(pb.body,pb.body.position,{x:120,y:-120})
  }
  if(keyWentUp(UP_ARROW)){
	Matter.Body.applyForce(pb.body,pb.body.position,{x:0,y:0})
	}	
  drawSprites();
 
}



