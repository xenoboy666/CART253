/**
 * Boingo
 * Pippin Barr
 *
 * Lots of balls that bounce around on the canvas
 */

// An array to store all the balls
let balls = [];

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Creates a random ball
 */
function createBall(x, y) {
  const newBall = {
    // Position and dimensions
    x: x,
    y: y,
    size: 20,

    // Colour
    fill: "#000000",

    // Movement
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };

  return newBall;
}

/**
 * Moves and draws all the balls
 */
function draw() {
  background("#87ceeb");

  // Go through every ball in the array
  for (let ball of balls) {
    moveBall(ball);
    bounceBall(ball);
    drawBall(ball);
  }
}

/**
 * Moves a ball according to its velocity
 */
function moveBall(ball) {
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

/**
 * Bounces a ball off the walls
 */
function bounceBall(ball) {
  // Check the left and right walls
  const bounceX = (ball.x > width || ball.x < 0);

  // Check the top and bottom walls
  const bounceY = (ball.y > height || ball.y < 0);

  // Reverse horizontal movement
  if (bounceX) {
    ball.velocity.x *= -1;
  }

  // Reverse vertical movement
  if (bounceY) {
    ball.velocity.y *= -1;
  }
}

/**
 * Draws a ball
 */
function drawBall(ball) {
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x, ball.y, ball.size);
  pop();
}

/**
 * Adds a new ball when the mouse is clicked
 */
function mousePressed() {
  const ball = createBall(mouseX, mouseY);
  balls.push(ball);
}