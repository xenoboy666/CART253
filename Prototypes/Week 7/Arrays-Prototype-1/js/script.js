
//snake variable 
let snake = [
    { x: 250, y: 250 },
    { x: 230, y: 250 },
    { x: 210, y: 250 }
];

//make the snake go bigger 
snake.push({
    x: snake[snake.length - 1].x,
    y: snake[snake.length - 1].y
});
//direction variables
let directionX = 20;
let directionY = 0;


function setup() {
createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
//background 
background(0, 180, 0);
//draw snake
   for (let i = 0; i < snake.length; i++) {
        fill(0, 255, 0);
        rect(snake[i].x, snake[i].y, 20, 20);
    }
//call move snake function
    moveSnake();
    keyPressed();
}

//move the snake 
function moveSnake() {

    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

    snake[0].x += 20;
}

//control the snake with the arrow keys
function keyPressed() {

    if (keyCode === UP_ARROW) {
        directionX = 0;
        directionY = -20;
    }

    if (keyCode === DOWN_ARROW) {
        directionX = 0;
        directionY = 20;
    }

    if (keyCode === LEFT_ARROW) {
        directionX = -20;
        directionY = 0;
    }

    if (keyCode === RIGHT_ARROW) {
        directionX = 20;
        directionY = 0;
    }
}