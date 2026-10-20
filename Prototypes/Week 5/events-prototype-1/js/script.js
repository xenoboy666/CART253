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
 let bg = {
   r: 0,
   g: 0,
   b: 0
};
let mouseTriggerBall={
    x:200,
    y:200,
    size:50,
    speed:0,
    fillColor:{
        r:100,
        g:0,
        b:225
    }
};
let startColor;
let targetColor;
let transitionStart;
let transitionDuration = 2000;

function setup() {
    createCanvas(500, 500);

    startColor = color(bg.r, bg.g, bg.b);
    targetColor = randomColor();
    transitionStart = millis();
}

function draw() {
    updateBackgroundColor();
    createmouseTriggerBall();
  moveBall();
    }
function moveBall(){
    mouseTriggerBall.x=
    mouseTriggerBall.x=mouseTriggerBall.x+mouseTriggerBall.speed;
}
function createmouseTriggerBall() {
    fill(mouseTriggerBall.fillColor.r, mouseTriggerBall.fillColor.g, mouseTriggerBall.fillColor.b);
    ellipse(mouseTriggerBall.x, mouseTriggerBall.y, mouseTriggerBall.size);
}
 function updateBackgroundColor() {
    let elapsed = millis() - transitionStart;
    let amount = constrain(elapsed / transitionDuration, 0, 1);

    let currentColor = lerpColor(startColor, targetColor, amount);

    background(currentColor);

    if (amount >= 1) {
        startColor = targetColor;
        targetColor = randomColor();
        transitionStart = millis();
    }
}

function randomColor() {
    return color(random(255), random(255), random(255));
}
function mousePressed(){
    mouseTriggerBall.speed=2;
      }function mouseReleased(){
    mouseTriggerBall.speed=0;
      }
function mouseDragged(){
    mouseTriggerBall.x=mouseX;
    mouseTriggerBall.y=mouseY 
     }
     function keyPressed(event){
    if(event.key==="q"){
    mouseTriggerBall.speed=175; 
    }
    if(event.key==="w"){
        mouseTriggerBall.fillColor.r=random(0,255);
        mouseTriggerBall.fillColor.g=random(0,255);
        mouseTriggerBall.fillColor.b=random(0,255)
     }
     if(event.key==="e"){
    mouseTriggerBall.size=random(50,200)  
       } 
        } 