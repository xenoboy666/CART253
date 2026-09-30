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
let skyfire=100
let roofr=60
let roofg=45
let roofb=7
let housebaser=75
let housebaseg=40
let housebaseb=5
let bigfire1Y=250
let bigfire2Y=200
function setup() {
createCanvas(500,500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(skyfire,0,0)
//sky change
skyfire=skyfire+1
//call function-run code
drawbigfire1();
drawbigfire2();
drawbigfire3();
drawland();
drawhousebase();
drawroof();
drawsmallfire1();
drawsmallfire2();
drawsmallfire3();
}

//draw Land
function drawland() {
push();
fill(30,50,0);
rect(0, 350, 500, 250);
pop();
}
//draw housebase
function drawhousebase() {
push();
fill(housebaser, housebaseg, housebaseb);
rect(50, 300, 100, 50);
pop();
housebaser=housebaser-0.5
housebaseg=housebaseg-0.5
housebaseb=housebaseb-0.5
}
//draw roof
function drawroof() {
push();
fill(roofr, roofg,roofb);
triangle(10, 300, 100, 250, 200, 300);
pop();
roofr=roofr-0.5
roofg=roofg-0.5
roofb=roofb-0.5
}
//draw small fire 1
function drawsmallfire1() {
    push();
    fill(255,0,30);
    triangle(400,400,450,350,500,400);
    pop();
    }
    //draw small fire 2
function drawsmallfire2() {
    push();
    fill(255,0,30);
    triangle(300,400,350,380,400,400);
    pop();
    }
      //draw small fire 3
function drawsmallfire3() {
    push();
    fill(255,0,30);
    triangle(100,450,150,430,200,450);
    pop();
    }
    //draw big fire 1
    function drawbigfire1() {
        push();
        fill(200,0,20);
        triangle(0,500,150,bigfire1Y,300,500);
        pop();
        bigfire1Y=bigfire1Y-0.5
        }
        //draw big fire 2
    function drawbigfire2() {
        push();
        fill(200,0,20);
        triangle(125,500,275,bigfire2Y,400,500);
        pop();
        bigfire2Y=bigfire2Y-0.75
        }
         //draw big fire 3
    function drawbigfire3() {
        push();
        fill(200,0,20);
        triangle(275,500,375,bigfire1Y,500,500);
        pop();
        }