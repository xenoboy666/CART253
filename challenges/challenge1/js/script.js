/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500,500)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
//background color
background(0,0,200)
//call the function-run the code
drawRoof();
drawHouseBody();
drawField();
drawChickenBody();
drawChickenHead();
drawChickenBeak();
drawChickenEye();
drawChickenCrest();
drawChickenWing();
drawSun();
drawHay();
drawFlowerStem();
drawFlower();

}
//Function to draw roof
function drawRoof(){ 
     push();
fill(155,155,155)
triangle(30,75,65,20,100,75);
pop();
}
//Function to draw house body
function drawHouseBody(){
    push();
    fill(170,170,200)
    rect(30,75,70,70);
    pop();
}
  //Function to draw field
  function drawField(){
    push();
    fill(0,100,0)
    rect(0,140,5000,7000); 
    pop();
  }
  //Function to draw chickenbody
    function drawChickenBody(){
    push();
    ellipse(450,450,200,200);
    pop();
  }
  //Function to draw chicken head
  function drawChickenHead(){
    push();
    ellipse(400,350,125,125);
    pop();
  }
 //Function to draw chicken beak
  function drawChickenBeak(){
    push();
    fill(255,255,0)
    triangle(350,350,300,350,350,325);
    pop();

  }
  //Function to draw chicken eye
  function drawChickenEye(){
    push();
    fill(0,0,0)
    ellipse(385,330,25,25);
    pop();
  }
  //Function to draw chicken crest 
  function drawChickenCrest(){
    push();
    fill(255,0,0)
    triangle(445,250,410,290,360,300);
    pop();

  }
  //Function to draw chicken wing
  function drawChickenWing(){
    push();
    fill(255,255,255)
    ellipse(480,500,100,100);
    pop();
    
  }
  //Function to draw sun 
  function drawSun(){
    push();
    fill(255,255,0)
    ellipse(470,20,100,100);
    pop();
  }
  //Function to draw hay
  function drawHay(){
    push();
    fill(255,255,0)
    rect(70,220,70,40);
    pop();
  }
  //Function to draw flower
  function drawFlower(){
    push();
    fill(255,0,180)
    ellipse(100,400,100,60);
    pop();
  }
  //Function to draw flower stem
  function drawFlowerStem(){
    push();
    fill(0,100,0)
    rect(90,400,20,100);
    pop();
  }
