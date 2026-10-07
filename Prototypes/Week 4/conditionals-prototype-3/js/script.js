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
let BG={
    x:0,
    y:0,
    w:500,
    h:500,
fillStates:{
    trigger:"#ff9900",
},
currentFill:"rgb(81, 255, 0)"
}
let barril={
    x:300,
    y:150,
    w:130,
    h:50,
    currentFill:"rgb(150, 150, 150)"
};
let handle={
    x:390,
    y:190,
    w:40,
    h:80,
    currentFill:"rgb(150, 150, 150)"
};
let target={
    x:100,
    y:170,
    w:70,
    h:70,
     fillStates:{
        trigger:"#cc00ff",
    },
    currentFill:"hsl(253, 100%, 50%)"
};
let bullet={
    x:300,
    y:160,
    w:30,
    h:30,
    currentFill:"#ffc400"
};
function setup() {
createCanvas(500,500);

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(BG.currentFill);

//call functions- run the code
triggerBGColor();
drawhandle();
drawtarget();
drawbullet();
drawbarril();
movebullet();
targetHitColorChange();
}
//draw barril
function drawbarril() {
push();
fill(barril.currentFill);
rect(barril.x, barril.y, barril.w, barril.h);
pop();
}
//draw handle
function drawhandle() {
push();
fill(handle.currentFill);
rect(handle.x, handle.y, handle.w, handle.h);
pop();
}
//draw target
function drawtarget() {
push();
fill(target.currentFill);
ellipse(target.x, target.y, target.w, target.h);
pop();
}
//draw bullet
function drawbullet() {
push();
fill(bullet.currentFill);
triangle(bullet.x, bullet.y, bullet.x+bullet.w, bullet.y+bullet.h/2, bullet.x, bullet.y+bullet.h);
pop();
}
//trigger BG color change
function triggerBGColor() {
    let distance=dist(BG.x,BG.y, mouseX, mouseY);
 if (mouseIsPressed==true && distance <BG.w){
    BG.currentFill=BG.fillStates.trigger;
}
else{
    BG.currentFill="rgb(81, 255, 0)";
}
}
//move bullet
function movebullet() {
    mouseX, mouseY
let distance=dist(handle.x,handle.y, mouseX, mouseY);
 if (distance < handle.x && distance < handle.y && mouseIsPressed){
    bullet.x=bullet.x-20
}
}
//target hit color change
function targetHitColorChange() {
    let distance=dist(target.x,target.y, bullet.x, bullet.y);
 if (distance <target.x){
    target.currentFill=target.fillStates.trigger;
}
}