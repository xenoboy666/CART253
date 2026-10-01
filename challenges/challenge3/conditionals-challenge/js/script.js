/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */
const target = {
    x:200,
    y:100,
    size: 50,
    fill:"#34d68d"
};
const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("rgb(242, 241, 241)");
  
  // Move user circle
  moveUser();
  
  // Draw the user, puck and target
  drawUser();
  drawPuck();
  drawTarget();
  movePuck();
}
//move the puck

function movePuck(){ 
let distance=dist(puck.x,puck.y, mouseX, mouseY);
 if (distance <puck.size/2 ){
puck.y=puck.y-1


}
   

    } 
    
  // Puck movement logic here

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

//Display the target circle
function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}

//target reaction to puck
let distance=dist(target.x,target.y, puck.x, puck.y);
if (distance < target.size / 2 + puck.size / 2)  {
    target.fill="rgb(238, 255, 0)"; 
}
