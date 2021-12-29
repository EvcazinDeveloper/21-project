const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var wall;
var wall_two;
var wall_three;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		isSttaic: false,
		restuition: 0.3,
		friction: 0,
		density: 1.2
	}

	
	ball = Bodies.circle(200, 200, 40, ball_options);
	World.add(world,ball);

	//Create the Bodies Here.
	wall = new WallObject(width/2,670,width,20);
	wall_two = new WallObject(1100,600,20,120);
	wall_three = new WallObject(1350,600,20,120);
	

	


	Engine.run(engine);
	rectMode(CENTER);

}


function draw() {
  rectMode(CENTER);
  background("lightblue");
Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 40);
  wall.show();
  wall_two.show();
  wall_three.show();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-100});

	}
}