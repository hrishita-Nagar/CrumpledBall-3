
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;


	dustbin1 = new Dustbin(1035,500,250,290);
	
	wall1 = new Ground(1128,350,25,280);
	wall2 = new Ground(944,350,25,280);

	ground = new Ground(600,495,1300,20);

	ball = new Ball(100,10,75,75);

	wall3 = new Ground(1190,170,20,1000);

	launcher= new Launcher(ball.body,{x:100,y:100});

	Engine.run(engine);
	
}




function draw() {
  rectMode(CENTER);
  background(400,200,200);

  wall1.display();
  wall2.display();

  ball.display();

  dustbin1.display();

  ground.display();

  wall3.display();

  launcher.display()
  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly()
}

