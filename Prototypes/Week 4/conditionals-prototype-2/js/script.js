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
let smileyface={
    x:250,
    y:250,
    w:400,
    h:400,
 fill:"rgb(255, 238, 0)"
};
let smile={
    x:250,
    y:250,
    w:200,
    h:250,
    fill:"hsl(120, 100%, 78%)" 
};
let eye1={
    x:160,
    y:180,
    w:100,
    h:50,
    fill:"#8fcdff"  
};
let eye2={
    x:340,
    y:180,
    w:50,
    h:100,
    fill:"rgb(255, 143, 212)" 
};
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
movesmileyface();
movesmile();
moveeye1();
moveeye2();
}

//move smiley face 
function movesmileyface() {
    mouseX, mouseY
let distance=dist(smileyface.x,smileyface.y, mouseX, mouseY);
 if (distance <smileyface.x && mouseIsPressed){
smileyface.y=smileyface.y-1

}
}
//move smile 
function movesmile() {
    mouseX, mouseY
let distance=dist(smile.x,smile.y, mouseX, mouseY);
 if (distance <smile.x && mouseIsPressed){
smile.x=smile.x-1

}
}
//move eye1 
function moveeye1() {
    mouseX, mouseY
let distance=dist(eye1.x,eye1.y, mouseX, mouseY);
 if (distance <eye1.x && mouseIsPressed){
eye1.y=eye1.y+1

}
}
//move eye2
function moveeye2() {
    mouseX, mouseY
let distance=dist(eye2.x,eye2.y, mouseX, mouseY);
 if (distance <eye2.x && mouseIsPressed){
eye2.x=eye2.x+1

}
}
//draw smiley face
function drawsmileyface() {
push();
fill(smileyface.fill);
ellipse(smileyface.x, smileyface.y, smileyface.w, smileyface.h);
pop();
}
//draw smile
function drawsmile() {
push();
fill(smile.fill);
arc(smile.x, smile.y, smile.w, smile.h, 0, PI);
pop();
}
//draw eye1
function draweye1() {
push();
fill(eye1.fill);
ellipse(eye1.x, eye1.y, eye1.w, eye1.h);
pop();
}
//draw eye2
function draweye2() {
push();
fill(eye2.fill);
ellipse(eye2.x, eye2.y, eye2.w, eye2.h);
pop();
}