/**
 * Happy Alien Party
 * Nathan Vallée
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
background(1,2,1);
//call the function-run the code<
drawAlienBody();
drawAlienHead();
drawEyeArm1();
drawEyeArm2();
drawEye1();
drawEye2();
drawIris1();
drawIris2();
drawPupil1();
drawPupil2();
drawAlienMouth();
drawAlienTongue();
drawAlienTeeth1();
drawAlienTeeth2();
drawHat();
drawPonpon();
}
//draw alien body
function drawAlienBody() {
    push();
    fill(0, 255, 0);
    rect(250, 300, 50, 200);
    pop();
}
//draw alien head
function drawAlienHead() {
    push();
    fill(0, 255, 0);
    ellipse(275, 220, 200, 200);
    pop();
}
//draw eye arm 1 
function drawEyeArm1() {
    push();
    fill(0, 255, 0);
    quad(175, 220, 75, 100, 85, 100, 175, 200);
    pop();
}
//draw eye arm 2
function drawEyeArm2() {
    push();
    fill(0, 255, 0);
    quad(375, 220, 425, 400, 435, 400, 375, 200);
    pop();
}
//draw eye 1
function drawEye1() {
    push();
    fill(255, 255, 255);
    ellipse(100, 100, 85, 85);
    pop();
}
//draw eye 2
function drawEye2() {
    push();
    fill(255, 255, 255);
    ellipse(425, 400, 85, 85);
    pop();
}
//draw iris 1
function drawIris1() {
    push();
    fill(0, 0, 255);
    ellipse(100, 100, 50, 50);
    pop();
}
//draw iris 2
function drawIris2() {
    push();
    fill(0, 0, 255);
    ellipse(425, 400, 50, 50);
    pop();
}
//draw pupils 1
function drawPupil1() {
    push();
    fill(0, 0, 0);
    ellipse(100, 100, 25, 25);
    pop();
}
//draw pupils 2 
function drawPupil2() {
    push();
    fill(0, 0, 0);
    ellipse(425, 400, 25, 25);
    pop();
}
//draw alien mouth
function drawAlienMouth() {
    push();
    fill(255, 0, 0);
    arc(275, 240, 100, 100, 200, PI);
    pop();
}
//draw alien tongue
function drawAlienTongue() {
    push();
    fill(255, 170, 170);
    ellipse(285, 275, 50, 30);
    pop();
}
//draw alien teeth 1
function drawAlienTeeth1() {
    push();
    fill(255, 255, 255);
    triangle(225, 240, 250, 240, 237, 270);
    pop();
}
//draw alien teeth 2
function drawAlienTeeth2() {
    push();
    fill(255, 255, 255);
    triangle(295, 200, 315, 230, 280, 230);
    pop();
}
//draw hat
function drawHat() {
    push();
    fill(105, 255, 200);
    triangle(240, 125, 300, 125, 275, 50);
    pop();
}
//draw ponpon
function drawPonpon() {
    push();
    fill(255, 0, 255);
    ellipse(275, 50, 25, 25);
    pop();
}