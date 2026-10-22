/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 5
    }
};
const ball_2={
  x:300,
  y:20,
  width:10,
  height:10,
  velocity:{
    x:0,
    y:2.5
    }
};
// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball);
    moveBall_2(ball_2);

   handleBounce(ball, paddle);
   handleBounce_2(ball_2,paddle);

    drawPaddle(paddle);
    drawBall(ball);
    drawBall_2(ball_2);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
paddle.x=mouseX
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
ball.y=ball.y+ball.velocity.y
}

function moveBall_2(ball_2) {
ball_2.y=ball_2.y+ball_2.velocity.y
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
let returnBall= checkOverlap(ball,paddle)
if(returnBall===true){
ball.velocity.y=ball.velocity.y*-1

}
}
function handleBounce_2(ball_2, paddle) {
let returnBall_2= checkOverlap(ball_2,paddle)
if(returnBall_2===true){
ball_2.velocity.y=ball_2.velocity.y*-1

}
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}
function drawBall_2(ball_2){
 push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball_2.x, ball_2.y, ball_2.width, ball_2.height);
    pop();
}
/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}
