
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var ball;
var world;
var bg;

function preload(){
bg = loadImage("court.png")


}


function setup() {
	
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    ball = new Ball(200,10,55);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 

  groundObject.display();
  dustbinObj.display();
 ball.display();

 keyPressed();
}

function keyPressed(){

	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{x:50,y:-30})
	}
	
	
	}