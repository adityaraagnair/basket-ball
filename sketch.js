
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, engine, world, line1, line2

function preload()

{ 
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStatic:false,
	restitution:.24,
	friction:0,
	density:1
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=Bodies.circle(100,200,10,ball_options)
World.add(world,ball)
	Engine.run(engine);
  grond=new Grond(400,680,800,20)
  line1=new Grond(600,670.56780,20,120)
  line2=new Grond(750,680.63578,20,120)
}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
  drawSprites();
  grond.display()
  line1.display()
 line2.display()
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:9,y:-23})
	}
}
