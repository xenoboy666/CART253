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
createCanvas(500,500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
//background color
background(220,2,250);


//call the function-run the code
drawGreeny();
drawRedy();
drawBluey();
drawYellowy();
drawOrangey();
drawPurpley();
drawLightGreeny();
drawPinky();
drawWhitey();
drawBlacky();
drawLightBluey();
drawBrownTriangle();
drawGreyOval();
drawDarkBlueOval();
drawLightBlueOval();
}
//draw green rectangle
function drawGreeny() {
    push();
    fill(0, 152, 25);
    rect(100, 100, 200, 200);
    pop();
}
//draw red rectangle
function drawRedy() {
    push();
    fill(255, 0, 0);
    rect(150, 150, 100, 100);
    pop();
}
//draw blue rectangle
function drawBluey() {
    push();
    fill(0, 0, 255);
    rect(175, 175, 50, 50);
    pop();
}
//draw yellow rectangle
function drawYellowy() {
    push();
    fill(255, 255, 0);
    rect(450, 1, 25, 500);
    pop();
}
//draw orange rectangle
function drawOrangey() {
    push();
    fill(255, 165, 0);
    rect(400, 1, 25, 500);
    pop();
}
//draw purple arc 
function drawPurpley() {
    push();
    fill(128, 0, 128);
    arc(100, 500, 375, 375, PI, TWO_PI);
    pop();
}
//draw light green arc
function drawLightGreeny() {
    push();
    fill(144, 238, 144);
    arc(100, 500, 300, 300, PI, TWO_PI);
    pop();
}
//draw pink arc
function drawPinky() {
    push();
    fill(255, 192, 203);
    arc(100, 500, 225, 225, PI, TWO_PI);
    pop();
}
//draw white arc
function drawWhitey() {
    push();
    fill(255, 255, 255);
    arc(100, 500, 150, 150, PI, TWO_PI);
    pop();
}
//draw black arc
function drawBlacky() {
    push();
    fill(0, 0, 0);
    arc(100, 500, 75, 75, PI, TWO_PI);
    pop();
}
//draw light blue triangle
function drawLightBluey() {
    push();
    fill(173, 216, 230);
    triangle(150, 170, 200, 1, 100, 1);
    pop();
}
//draw brown triangle
function drawBrownTriangle() {
    push();
    fill(165, 42, 42);
    triangle(245, 270, 270, 1, 220, 1);
    pop();
}
//draw grey oval
function drawGreyOval() {
    push();
    fill(128, 128, 128);
    ellipse(400, 200, 200, 50);
    pop();
}
//draw dark blue oval   
function drawDarkBlueOval() {
    push();
    fill(0, 0, 139);
    ellipse(400, 200, 100, 25);
    pop();
}
//draw light blue oval
function drawLightBlueOval() {
    push();
    fill(173, 216, 230);
    ellipse(400, 200, 50, 12.5);
    pop();
}