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

let ellipse_Size = 550;
let rect_Size=10;
let sunX=20;
let sunY=20;
let sunSize=10;
let r=255;
let g=255;
let b=0;

let sun = {
    sunX:20,
    sunY:50,
    sunSize:50,
    r:255,
    g:255,
    b:0
}


let bird = {
    birdX:200,
    birdY:50,
    birdSize:20,
    r:0,
    g:0,
    b:255
}
function setup() {
createCanvas(400,400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
//draw sun
function draw() {
background(0,0,0)
fill(sun.r,sun.g,sun.b);
ellipse(sun.sunX,sun.sunY,sun.sunSize,sun.sunSize);

//draw bird
fill(bird.r,bird.g,bird.b);
ellipse(bird.birdX,bird.birdY,bird.birdSize,bird.birdSize);

bird.birdX=bird.birdX+1;
}