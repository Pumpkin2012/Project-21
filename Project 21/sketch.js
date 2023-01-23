
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,leftside,rightside

function preload() {
	
}

function setup() {
	createCanvas(1350, 700);
    engine = Engine.create();
    world = engine.world;
	var options = {
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}
	

	//Create the Bodies Here
	ground = new Ground(width/2, 670, width, 20)
	leftside = new Ground(1000,600,20,120)
	rightside = new Ground(1200,600,20,120)
	ball = Bodies.circle(50, 50, 20,options)
	World.add(world, ball)
	
	console.log(ground)
	console.log(ball)
}


function draw() {
	background(0);
    Engine.update(engine);
	
	
	ground.display();
	leftside.display();
	rightside.display();
	
	ellipse(ball.position.x,ball.position.y,20,20)
	
	drawSprites();
}
function Pressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.7,y:-0.5})
	}
	
	
}



