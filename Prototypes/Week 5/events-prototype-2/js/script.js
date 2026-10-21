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
let rocket = {
    x: 250,
    y: 250,
    speed: 3,
    angle: 0,
    velocityY: 0,
    crashed: false
};
let flash=false;

function setup() {
    createCanvas(500, 500);
    angleMode(RADIANS);
}

function draw() {
//command for when the bg crash flash
if (flash) {
    background(255, 0, 0); // Red flash
} else {
    background(30); // Normal background
}

if (rocket.crashed === false) {
        let dx = mouseX - rocket.x;
        let dy = mouseY - rocket.y;

        rocket.angle = atan2(dy, dx);

        rocket.x += cos(rocket.angle) * rocket.speed;
        rocket.y += sin(rocket.angle) * rocket.speed;
    } else {
        // Gravity pulls the rocket down
        rocket.velocityY += 0.2;
        rocket.y += rocket.velocityY;

        // Point the rocket downward
        rocket.angle = HALF_PI;
    }

    // Draw the rocket
    push();
    translate(rocket.x, rocket.y);
    rotate(rocket.angle);

    fill(220);
    triangle(-15, -12, -15, 12, 20, 0);



    // Nose cone
    fill(255, 80, 50);
    triangle(12, -8, 12, 8, 25, 0);

    pop();
}
//command to crash rocket
function keyPressed() {
    if (key === "c" || key === "C") {
        rocket.crashed = true;
        rocket.velocityY = 0;
            flash = true;
    }
}
//command to speed up rocket
 function mousePressed(){
    rocket.speed=8;
      }function mouseReleased(){
    rocket.speed=3;
      }

//command to make rocket drift
      function keyPressed(event){
    if(event.key==="a"){
    rocket.x=2; 
    }
    if(event.key==="d"){
        rocket.y=-2; 
     }
       }