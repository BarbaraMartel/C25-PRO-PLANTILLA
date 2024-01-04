//Importar módulos del motor físico Matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variable botón
var btn2;
//variable ángulo
var angle=60;


function setup() {
  createCanvas(400,400);

  //Crear motor físico y el mundo
  engine = Engine.create();
  world = engine.world;

  //Propiedades físicas de la pelota


  //Propiedades físicas del suelo


  //Crear pelota y agregar al mundo


  //Crear suelo y agregar al mundo


  //rectMode y ellipseMode


  //Crear botón de fuerza
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  //Crear ventiladores



  
}


function draw() 
{
  background(51);
  //Actualizar el motor físico
  Engine.update(engine);


  //Mostrar pelota con elipse y suelo con rect


  //Mostrar ventiladores

  
  
}

function vForce()
{
  //Función applyForce
  
}
  
