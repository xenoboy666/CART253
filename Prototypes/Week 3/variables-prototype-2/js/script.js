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
let swimX=550
let swimY=10
let swimX2=550
let swimY2=10
let swimX3=550
let swimY3=10
let swimX4=550
let swimY4=10
let glowr=0
let glowg=200
let glowb=200
let jelliness=50
let abyssSize1=150
let abyss1r=100
let abyss1g=0
let abyss1b=100
let abyss2r=0
let abyss2g=0
let abyss2b=100

let abyssSize2=250
//create canvas
function setup() {
createCanvas(500,500)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0,0,0)

//call function-run code
drawabyss1();
drawabyss2();
drawtentacle1();
drawtentacle2();
drawtentacle3();
drawhead1();
 
}

//draw jellyfish head1
function drawhead1() {
push();
stroke(60,0,60);
strokeWeight(jelliness);
fill(glowr,glowg,glowb);
arc(swimX, swimY,200,200,0,PI+QUARTER_PI,PIE);
pop();

swimX=swimX-1.5
swimY=swimY+1.25
 
glowr=glowr+1
glowg=glowg+0.15 
glowb=glowb+0.15

jelliness=jelliness-0.25
} 

//draw tentacle 1
function drawtentacle1() {
    push();
    stroke(60,0,60);
strokeWeight(jelliness);
    fill(glowr,glowg,glowb);
    rect(swimX2,swimY2,55,55);
    pop();

 swimX2=swimX2-1
swimY2=swimY2+0.75
    } 

//draw tentacle 2
function drawtentacle2() {
   push();
    stroke(60,0,60);
strokeWeight(jelliness);
    fill(glowr,glowg,glowb);
    rect(swimX3,swimY3,55,55);
    pop();

 swimX3=swimX3-1.50
swimY3=swimY3+1
    } 
    //draw tentacle 3
function drawtentacle3() {
   push();
    stroke(60,0,60);
strokeWeight(jelliness);
    fill(glowr,glowg,glowb);
    rect(swimX4,swimY4,55,55);
    pop();

 swimX4=swimX4-1.40
swimY4=swimY4+0.70
    } 

//draw abyss 1
function drawabyss1() {
    push();
    strokeWeight(jelliness);
    fill(abyss1r, abyss1g, abyss2b);
    rect(150,140,abyssSize1,abyssSize1);
    abyssSize1=abyssSize1+1.5
    abyss1r=abyss1r+1
    abyss1g=abyss1g+1
    abyss1b=abyss1b+1
    } 
//draw abyss 2
function drawabyss2() {
    push();
    strokeWeight(jelliness);
    fill(abyss2r, abyss2g, abyss2b);
    rect(150,140,abyssSize2,abyssSize2);
    abyssSize2=abyssSize2-3
      abyss2r=abyss2r+1
    abyss2g=abyss2g+1
    abyss2b=abyss2b+1
    } 