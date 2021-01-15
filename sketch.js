const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var ground,stand,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var box8,box9;
var box10,box11,box12,box13,box14,box15,box16;
var polygonimg;
var slingShot;


function preload(){
  polygonimg = loadImage("polygon.png")
}

function setup(){
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,600,1900,20)

    stand = new Ground(400,500,300,10)
    stand2 = new Ground(870,300,300,10)

    //level one
    block1 = new Box(300,270,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    //top
    block16 = new Box(390,155,30,40);

   //level two
    box8 = new Box(830,250,30,40);
  
    box9 = new Box(860,250,30,40);
    box10 = new Box(890,250,30,40);
    box11 = new Box(920,250,30,40);
    box12 = new Box(950,250,30,40);
    //level three
    box13 = new Box(860,210,30,40);
    box14 = new Box(890,210,30,40);
    box15 = new Box(920,210,30,40);
    //top
    box16 = new Box(890,170,30,40)

    ball = Bodies.circle(50,200,20);
    World.add(world,ball); 
    slingShot = new SlingShot(this.ball,{x:100,y:200});

    
   

 

    Engine.run(engine);
}


function draw(){
background("lightgreen")



  ground.display();  
  stand.display();
  stand2.display();

  fill("purple")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("blue")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("lightblue")
  block13.display();
  block14.display();
  block15.display();

  fill("green")
  block16.display();

 fill("yellow")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("orange")
  box13.display();
  box14.display();
  box15.display();

  fill("red")
  box16.display();

 imageMode(CENTER)
 image(polygonimg,ball.position.x,ball.position.y,40,40)


 slingShot.display()
 
 

drawSprites();

}

function mouseDragged(){
 Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly()
}

function keyPressed(){
if(keyCode===32){
slingShot.attach(ball.body)
}
}