const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snowman,snowmanImg;
var ground;
var engine, world;
var drops = [];
var rand;

var maxDrops=50;

var thunderCreatedFrame=0;

function preload(){
snowmanImg = loadImage("snowman.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(700,700);
    
    snowman = createSprite(350,570,100,100);
    snowman.addImage("snowman",snowmanImg);
    snowman.scale = 0.07;

    ground = createSprite(350,700,800,50);
    ground.shapeColor = "white";
   
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,700), random(0,700)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(220); 

   
    rand = Math.round(random(1,4));
   

  

   

  
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
       drops[i].updateY()
        
    }

    drawSprites();
}   

