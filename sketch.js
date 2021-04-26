
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function preload()
{
	
}
	

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(20,650,2500,30);

	bin = new Bin(1000,520,100,20);
	
		

	Engine.run(engine);
    paper1 = new Paper(190,290,40);

	thrower = new Launcher(paper1.body,{x:290,y:290});
}


function draw() {
	background("white");
	Engine.update(engine);
  rectMode(CENTER);
 // background(0);
  ground.display();
  bin.display();
  paper1.display();
  thrower.display();
 
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
    thrower.fly();
}