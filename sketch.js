const Engine = Matter.Engine;
const World = Matter.world;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1, base2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12;
var hexagon;


function preload(){

}

function setup(){
createCanvas(1000, 800);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

base1 = new Ground(700, 360, 500, 15);
base2 = new Ground(800, 590, 500, 15);

block1 = new Block(730, 235, 30, 40);
block2 = new Block(760, 235,30, 40);
block3 = new Block(790, 235, 30, 40);
block4 = new Block(540, 200, 30, 40);
block5 = new Block(560, 200, 30, 40);
block6 = new Block(350, 165, 30, 40);

block7 = new Block(830, 135, 30, 40);
block8 = new Block(860, 135, 30, 40);
block9 = new Block(890, 135, 30, 40);
block10 = new Block(640, 100, 30, 40);
block11 = new Block(660, 100, 30, 40);
block12 = new Block(450, 65, 30, 40);

hexagon = new Hexagon(50, 200, 20, 50);

}

function draw(){
background("voilet");

text = "Drag the hexagonal box to release it, release it and launch it "

base1.display();
base2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

hexagon.display();

drawSprites();
}
