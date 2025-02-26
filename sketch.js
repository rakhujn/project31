const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles, plinko, divisions, ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 790, 480, 20);

  plinko = new Plinko(240, 400, 10);

  divisions = new Division(1, 580, 10, 400);

  for (var j = 75; j <= width; j=j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <= width-10; j=j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  
  for  (var j = 75; j <= width; j= j +  50){
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black"); 
  textSize(20);
  Engine.update(engine);
  
  ground.display();
  plinko.display();
  divisions.display();
  
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  
  if (frameCount%90 === 0){
    particles.push(new Particle(random(width/ 2-10, width/ 2+10, 10, 10)));
    score++;
  }
  
  for (var j =0; j < particle.length; j++){
    particles[j].display();
  }
  
  for (var k =0; k < divisions.length; k++){
    divisions[k].display();
  }

  drawSprites();
}
