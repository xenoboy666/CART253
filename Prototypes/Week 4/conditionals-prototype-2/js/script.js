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
    background(0,0,0);
//call functions- run the code
drawsmileyface();
drawsmile();
draweye1();
draweye2();
}
//draw smiley face
function drawsmileyface() {
push();
fill(255, 255, 0);
ellipse(250, 250, 400, 400);
pop();
}
//draw smile
function drawsmile() {
push();
fill(0, 0, 0);
arc(250, 250, 300, 300, 0, PI);
pop();
}
//draw eye1
function draweye1() {
push();
fill(0, 0, 0);
ellipse(160, 180, 100, 100);
pop();
}
//draw eye2
function draweye2() {
push();
fill(0, 0, 0);
ellipse(340, 180, 100, 100);
pop();
}