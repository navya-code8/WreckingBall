const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box, box2, box3, box4, box5, box6;
var box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18;
var sling;

function setup(){
  createCanvas(3000,800)
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500, 790, 3000, 20);
  box = new Box(900,100,70,70)
  box2 = new Box(900,100,70,70 );
  box3 = new Box(900,100,70,70 );
  box4 = new Box(900,100,70,70 );
  box5 = new Box(900,100,70,70 );
  box6 = new Box(900,100,70,70 );

  box7 = new Box(800,100,70,70)
  box8 = new Box(800,100,70,70)
  box9 = new Box(800,100,70,70)
  box10 = new Box(800,100,70,70)
  box11= new Box(800,100,70,70)
  box12= new Box(800,100,70,70)

  box13= new Box(700,100,70,70)
  box14= new Box(700,100,70,70)
  box15= new Box(700,100,70,70)
  box16= new Box(700,100,70,70)
  box17= new Box(700,100,70,70)
  box18= new Box(700,100,70,70)

  ball = new Ball(200,200,80);

  sling = new Sling(ball.body, {x: 350,y:50})


}

function draw(){
  background(0);
  Engine.update(engine)

  ground.display();
  box.display();
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

  ball.display();
  sling.display();

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x: mouseX, y:mouseY})

}

function mouseReleased(){

  sling.fly()


}
