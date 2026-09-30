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

//variables 
let sky= {
r:0,
g:0,
b:0,
}

let sunX=-50;
let cloudX=600;
let cloudr=100
let cloudg=100
let cloudb=100
//create canvas
function setup() {
createCanvas(500,500)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(sky.r,sky.g,sky.b);
//night to day
sky.b=sky.b+1
//Call function-run code
drawland();
drawhousebase();
drawroof();
drawsun();
drawcloud();
}
//draw Land
function drawland() {
push();
fill(0,100,0);
rect(0, 350, 500, 250);
pop();
}
//draw housebase
function drawhousebase() {
push();
fill(100, 50, 10);
rect(50, 300, 100, 50);
pop();
}
//draw roof
function drawroof() {
push();
fill(100, 60, 10);
triangle(10, 300, 100, 250, 200, 300);
pop();
}
//draw sun
function drawsun() {
push();
fill(255, 255, 0);
circle(sunX, 100, 75);
pop();
sunX=sunX+0.5
 
}
//draw cloud
function drawcloud() {
    push();
    fill(cloudr, cloudg, cloudb);
    ellipse(cloudX,200,200,60);
    pop();
cloudX=cloudX-1
cloudr=cloudr+1
cloudg=cloudg+1
cloudb=cloudb+1
 }