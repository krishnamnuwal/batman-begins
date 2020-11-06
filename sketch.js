//const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
var bgImg
var drops=[]
var maxDrops=700
var drop
var man;
var land
//var thunder;
var thunder1,thunder2,thunder3,thunder4;
var thunderSound;
var rainSound
function preload(){
  bgImg=loadImage("ST.jpg");
  thunder1=loadImage("thunder5.png");
  thunder2=loadImage("thunder4.png");
  thunder3=loadImage("thunder3.png");
  thunder4=loadImage("thunder6.png")

  thunderSound=loadSound("thunder sound.mp3")
  rainSound=loadSound("water-rain2.mp3")
}
function setup(){
  createCanvas(3000,1000);
  engine=Engine.create();
  world=engine.world;
 /* for(i=0;i<maxDrops;i++){
    drops.push(new Drops(random(0,3000),random(0,1000)))
  }*/
  man=new Umbrella(1250,750,225)
//  land=new Land(10,980,3000,20);
//
if(frameCount%100===0){
  for(var i=0;i<maxDrops;i++){
    var drop=new Drops(random(0,3000),random(0,1000),10)
  //  drop.lifetime=200
    drops.push(drop)
  }
}

}
function draw(){
  background(bgImg);
  drawSprites();
  Engine.update(engine);
  man.display();
  
  rainDrops();

  for(var i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
   // land.display();


  }
 
  
  
 
lightning();

}
function rainDrops(){

  
}
function lightning(){
  if(frameCount%80===0){
  var thunder=createSprite(random(0,2300),60,15,15);
  var rand=Math.round(random(1,3));
  thunderSound.play();
  rainSound.play();
  switch(rand){
    case 1: thunder.addImage(thunder1);
            break;
    
    case 2:  thunder.addImage(thunder2);
             break;

    case 3:  thunder.addImage(thunder3);
             break;

    case 4: thunder.addImage(thunder4);
            break;         

    default: break;

    }
    thunder.scale=2;
    thunder.lifetime=20;

}

}