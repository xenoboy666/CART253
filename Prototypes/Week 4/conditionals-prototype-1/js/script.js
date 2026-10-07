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
let housebase={
    x:50,
    y:300,
    w:100,
    h:50,  

 fillStates:{
    burned:"hsl(0, 0%, 0%)",
    neutral:"hsl(19, 100%, 22%)",
},
    currentFill: "hsl(19, 100%, 22%)"
 }
let roof={
    x:25,
    y:300,
    w:150,
    h:50,
 fillStates:{
    burned:"hsl(0, 0%, 0%)",
    neutral:"hsl(19, 100%, 22%)",
},
    currentFill: "hsl(19, 100%, 22%)"
 }
 let land={
    x:0,
    y:350,
    w:500,
    h:250,
fillStates:{
    burned:"hsl(0, 0%, 0%)",
    neutral: "hsl(98, 99%, 26%)",
}, 
    currentFill:"hsl(98, 99%, 26%)"
 }
let sky={
    x:0,
    y:0,
    w:500,
    h:500,
fillStates:{
    burned:"hsl(0, 100%, 50%)",
    neutral: "hsl(221, 99%, 26%)",
}, 
    currentFill: "hsl(221, 99%, 26%)"
 }
 let sun={
    x:100,
    y:100,
    w:100,
    h:100,
fillStates:{
    burned:"hsl(187, 100%, 50%)",
    neutral: "#d9ff01",
}, 
    currentFill:  "#d9ff01"
 }

function setup() {
createCanvas(500,500)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(sky.currentFill);

//Call function-run code
drawland();
drawhousebase();
drawroof();
drawsun();
drawcloud();

//burned conditonals
mouseX, mouseY
 let housedistance=dist(housebase.x,housebase.y, mouseX, mouseY);
 let landdistance=dist(land.x,land.y, mouseX, mouseY);
 let roofdistance=dist(roof.x,roof.y, mouseX, mouseY);
 let skydistance=dist(sky.x,sky.y, mouseX, mouseY);
 let sundistance=dist(sun.x,sun.y, mouseX, mouseY);
let mouseIsMoving = movedX >0 || movedY >0;
//console.log(distance);
if(
    (housedistance <housebase.w||
roofdistance <roof.w||
landdistance <land.w) && mouseIsMoving){
    housebase.currentFill=housebase.fillStates.burned;
    roof.currentFill=roof.fillStates.burned;
    land.currentFill=land.fillStates.burned;
    sky.currentFill=sky.fillStates.burned;
    sun.currentFill=sun.fillStates.burned;
  
}
else{
    housebase.currentFill=housebase.fillStates.neutral;
roof.currentFill=roof.fillStates.neutral;
land.currentFill=land.fillStates.neutral;
sky.currentFill=sky.fillStates.neutral;
sun.currentFill=sun.fillStates.neutral;
} 
}
//draw Land
function drawland() {
push();
fill(land.currentFill);
rect(land.x, land.y, land.w, land.h);
pop();
}
//draw housebase
function drawhousebase() {
push();
fill(housebase.currentFill);
rect(housebase.x, housebase.y, housebase.w, housebase.h);
pop();
}
//draw roof
function drawroof() {
push();
fill(roof.currentFill);
triangle(roof.x, roof.y, roof.x + roof.w, roof.y, roof.x + roof.w/2, roof.y - roof.h);
pop();
} 
//draw sun
function drawsun() {
push();
fill(sun.currentFill);
ellipse(100, 100, 100, 100);
pop();

}

//draw cloud
function drawcloud() {
push();
fill(200, 200, 200);
ellipse(400, 200, 200, 50);
pop();
}
