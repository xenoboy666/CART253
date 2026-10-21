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
let block = {
    x: 250,
    y: 50,
   
    size: 40,
    speed: 0,
    speedX: 0,
    gravity: 0.3,
    falling: false,
fillColor:{
    r:0,
    g:0,
    b:0
    }
};
function setup() {
createCanvas(500,500);
background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
// block movement
if (block.falling) {
    block.speed += block.gravity;
    block.y += block.speed;
    block.x += block.speedX;
}

// Stop the block at the bottom
if (block.y + block.size / 2 >= height) {
    block.y = height - block.size / 2;
    block.speed = 0;
    block.falling = false;
}

// Draw the block
rectMode(CENTER);
fill(block.fillColor.r, block.fillColor.g, block.fillColor.b);
rect(block.x, block.y, block.size, block.size);

}
function keyPressed() {
    //make the block return to mouse
    if (key === "r" || key === "R") {
        block.x = mouseX;
        block.y = mouseY;
        block.speed = 0;
        block.falling = false;
    }
    //make the block fall to the right
        if (key === "t" || key === "T") {
        block.falling = true;
        block.speed = 0;
        block.speedX = 3;
    }
    //change the block's color
    if (key === "e" || key === "E") {
    block.fillColor.r = random(0, 255);
    block.fillColor.g = random(0, 255);
    block.fillColor.b = random(0, 255);
}
}
//make the black fall downward
function mousePressed() {
    if (block.falling === false) {
        block.falling = true;
        block.speed = 0;
    }
}