const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;

function setup() {
	createCanvas(800, 670);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,1200,20)
  
  boxPosition=width/2-100
	boxY=610;	
	boxleftSprite=createSprite(boxPosition, boxY, 20,100); 
	boxleftSprite.shapeColor=color(255,0,0); 
	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
  World.add(world, boxLeftBody);
  
  boxPosition=width/2-1 
	boxY=610;	
	boxrightSprite=createSprite(boxPosition, boxY, 20,100); 
	boxrightSprite.shapeColor=color(255,0,0); 
	boxRightBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
	World.add(world, boxRightBody);

	boxPosition=width/2-45 
	boxY=650;	
	boxdownSprite=createSprite(boxPosition, boxY, 100,20); 
	boxdownSprite.shapeColor=color(255,0,0); 
	boxDownBody = Bodies.rectangle(boxPosition+20, boxY, 100,10 , {isStatic:true} ); 
	World.add(world, boxDownBody);

	var ball_options ={
		isStatic: false,
        restitution: 0.3, 
    }

	ball = Bodies.circle(100,640,20,ball_options);
	World.add(world,ball);
    console.log(ground);
}

	Engine.run(engine);
  
function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
	} 
}



