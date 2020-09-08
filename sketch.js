
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var player,ground,ground2,ground3,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var box14,box15,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;

function preload(){
	
}

function setup() {
	createCanvas(1450, 700);

	engine = Engine.create();
	world = engine.world;

	player = new Player(150,400,60,60);

	box1 = new Box(550,475,30,40);
	box2 = new Box(580,475,30,40);
	box3 = new Box(610,475,30,40);
	box4 = new Box(640,475,30,40);
	box5 = new Box(670,475,30,40);
	box6 = new Box(700,475,30,40);
	box7 = new Box(730,475,30,40);
	box8 = new Box(580,435,30,40);
	box9 = new Box(610,435,30,40);
	box10 = new Box(640,435,30,40);
	box11 = new Box(670,435,30,40);
	box12 = new Box(700,435,30,40);
	box13 = new Box(640,395,30,40);
	box14 = new Box(670,395,30,40);
	box15 = new Box(610,395,30,40);
	box16 = new Box(640,355,30,40);
	box17 = new Box(1100,275,30,40);
	box18 = new Box(1070,275,30,40);
	box19 = new Box(1040,275,30,40);
	box20 = new Box(1130,275,30,40);
	box21 = new Box(1160,275,30,40);
	box22 = new Box(1100,235,30,40);
	box23 = new Box(1130,235,30,40);
	box24 = new Box(1070,235,30,40);
	box25 = new Box(1100,195,30,40);

	ground = new Ground(725,690,1450,30);
	ground2 = new Ground(640,500,300,10);
	ground3 = new Ground(1100,300,280,10);

	place = new Place(player.body,{x:150,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(60,42,42);

  player.display();
  place.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  
  ground.display();
  ground2.display();
  ground3.display();

}

function mouseDragged(){
	Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
place.fly();
}

function keyPressed(){
if(keyCode === 32){
   place.attach(player.body);
   Matter.Body.setPosition(player.body,{x:150, y:400});
}
}