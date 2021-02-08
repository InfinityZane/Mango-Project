const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var gameState= "onSling";

var boy;

var ground;

var tree;

var slingshot;

var mango1, mango2, mango3, mango4, mango5, mango6;

function preload(){
	//tree.loadImage()
	
}

function setup() {
	createCanvas(1600, 1400);
	background('white');


	engine = Engine.create();
	world = engine.world;

	stone=new Stone(200,200,70);

	boy = new SlingShot(stone.body,{x:75, y:325})

	ground = new Ground(300,500,2000,100)

	mango1 = new Mango(400,120,10,10);
	mango2 = new Mango(390,100,10,10);
	mango3 = new Mango(400,90,10,10);
	mango4 = new Mango(380,110,10,10);
	mango5 = new Mango(410,130,10,10);
	mango6 = new Mango(400,70,10,10);

	tree=createSprite(700,300,10,100)
	tree.loadImage="tree.png";

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  //background(0);

  stone.display();
  boy.display();
  ground.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    boy.fly();
	gameState = "launched";
	this.sling.bodyA = null;
}