
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var rope;
var bobObject1;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1=new Bob(250,600);
	bobObject2=new Bob(350,600);
	bobObject3=new Bob(450,600);
	bobObject4=new Bob(550,600);
	bobObject5=new Bob(650,600);
	roofObject=new Roof(445,100,590,50);
	rope1=new Rope(bobObject1.body,roofObject.body,-195,0);
    rope2=new Rope(bobObject2.body,roofObject.body,-95,0);
	rope3=new Rope(bobObject3.body,roofObject.body,5,0);
	rope4=new Rope(bobObject4.body,roofObject.body,105,0);
	rope5=new Rope(bobObject5.body,roofObject.body,205,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display(); 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();  
  rope5.display();
}

function keyPressed() {
	 if (keyCode === 32) 	 { 
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-250,y:-250}); 
		}
	 }