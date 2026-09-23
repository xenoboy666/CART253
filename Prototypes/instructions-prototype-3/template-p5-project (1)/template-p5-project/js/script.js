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
createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
//background color
background(0, 0, 250);

//call the function-run the code
drawOcean();
drawSharkFin1();
drawSharkFin2();
drawSharkEye1();
drawSharkEye2();
drawSharkPupil1();
drawSharkPupil2();
drawSharkBody();
drawSharkMouth();
drawSharkTeeth1();
drawSharkTeeth2();
drawSharkTeeth3();
drawSharkTeeth4();
drawSharkTeeth5();
drawSharkTeeth6();
drawSharkTeeth7();
drawSharkTeeth8();
drawSharkTeeth9();
drawSharkTeeth10();
drawSharkNostril1();
drawSharkNostril2();
drawBoatBody();
drawBoatMiddle();
drawBoatTop();
drawBoatWindow1();
drawBoatWindow2();
drawBoatWindow3();
drawBubble1();
drawBubble2();
drawBubble3();
drawBubble4();
}

//draw ocean
function drawOcean() {
    push();
    fill(0, 100, 255);
    rect(0, 150, 500, 350);
    pop();
}
//draw sharkbody
function drawSharkBody() {
    push();
    fill(100, 100, 250);
    quad(250, 240, 400, 390, 250, 900, 100, 390);
    pop();
}
//draw shark fin 1
function drawSharkFin1() {
    push();
    fill(100, 100, 250);
    triangle(50, 400, 250, 450, 250, 800);
    pop();
}
//draw shark fin 2
function drawSharkFin2() {
    push();
    fill(100, 100, 250);
    triangle(450, 400, 250, 450, 250, 800);
    pop();
}
//draw shark mouth
function drawSharkMouth() {
    push();
    fill(0, 0, 0);
    triangle(250, 300, 350, 500, 150, 500);
    pop();
}
//draw shark teeth 1
function drawSharkTeeth1() {
    push();
    fill(255, 255, 255);
    triangle(160, 480, 175, 450, 200, 480);
    pop();
}
//draw shark teeth 2
function drawSharkTeeth2() {
    push();
    fill(255, 255, 255);
    triangle(300, 480, 325, 450, 340, 480);
    pop();
}
//draw shark teeth 3
function drawSharkTeeth3() {
    push();
    fill(255, 255, 255);
    triangle(280, 440, 300, 400, 320, 435);
    pop();
}
//draw shark teeth 4
function drawSharkTeeth4() {
    push();
    fill(255, 255, 255);
    triangle(180, 440, 200, 400, 220, 435);
    pop();
}
//draw shark teeth 5
function drawSharkTeeth5() {
    push();
    fill(255, 255, 255);
    triangle(270, 400, 280, 360, 300, 395);
    pop();
}
//draw shark teeth 6
function drawSharkTeeth6() {
    push();
    fill(255, 255, 255);
    triangle(200, 400, 220, 360, 240, 395);
    pop();
}
//draw shark teeth 7
function drawSharkTeeth7() {
    push();
    fill(255, 255, 255);
    triangle(260, 360, 260, 320, 280, 355);
    pop();
}
//draw shark teeth 8
function drawSharkTeeth8() {
    push();
    fill(255, 255, 255);
    triangle(220, 360, 240, 320, 240, 360);
    pop();
}
//draw shark teeth 9
function drawSharkTeeth9() {
    push();
    fill(255, 255, 255);
    triangle(280, 500, 260, 500, 270, 445);
    pop();
}
//draw shark teeth 10
function drawSharkTeeth10() {
    push();
    fill(255, 255, 255);
    triangle(220, 500, 240, 500, 230, 475);
    pop();
}
//draw shark nostrils 1
function drawSharkNostril1() {
    push();
    fill(0, 0, 0);
    triangle(260, 300, 270, 290, 290, 320);
    pop();
}
//draw shark nostrils 2
function drawSharkNostril2() {
    push();
    fill(0, 0, 0);
    triangle(240, 300, 230, 290, 210, 320);
    pop();
}
//draw shark eye 1
function drawSharkEye1() {
    push();
    fill(255, 255, 255);
    ellipse(330, 330, 50, 50);
    pop();
}
//draw shark eye 2
function drawSharkEye2() {
    push();
    fill(255, 255, 255);
    ellipse(170, 330, 50, 50);
    pop();
}
//draw shark pupil 1
function drawSharkPupil1() {
    push();
    fill(0, 0, 0);
    ellipse(330, 330, 25, 25);
    pop();
}
//draw shark pupil 2
function drawSharkPupil2() {
    push();
    fill(0, 0, 0);
    ellipse(170, 330, 25, 25);
    pop();
}
//draw boat body  
function drawBoatBody() {
    push();
    fill(139, 50, 0);
  quad(100, 100, 400, 100, 350, 150, 150, 150);
    pop();
}
//draw boat middle
function drawBoatMiddle() {
    push();
    fill(255, 200, 200);
    rect(200, 50, 150, 50);
    pop();
}
//draw boat top
function drawBoatTop() {
    push();
    fill(255, 0, 0);
    triangle(200, 50, 350, 50, 300, 10);
    pop();
}
//draw boat window 1
function drawBoatWindow1() {
    push();
    fill(0, 0, 255);
    ellipse(225, 75, 25, 25);
    pop();
}
//draw boat window 2
function drawBoatWindow2() {
    push();
    fill(0, 0, 255);
    ellipse(275, 75, 25, 25);
    pop();
}
//draw boat window 3
function drawBoatWindow3() {
    push();
    fill(0, 0, 255);
    ellipse(325, 75, 25, 25);
    pop();
}
//draw bubble 1
function drawBubble1() {
    push();
    fill(0, 255, 255);
    ellipse(100, 355, 25, 25);
    pop();
}
//draw bubble 2
function drawBubble2() {
    push();
    fill(0, 255, 255);
    ellipse(430, 245, 40, 40);
    pop();
}
//draw bubble 3
function drawBubble3() {
    push();
    fill(0, 255, 255);
    ellipse(400, 300, 15, 15);
    pop();
}
//draw bubble 4
function drawBubble4() {
    push();
    fill(0, 255, 255);
    ellipse(150, 240, 20, 20);
    pop();
}