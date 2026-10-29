//our beautiful red planet
let planet={
x:250,
y:250,
w:100,
h:100
}
//asteroids
let asteroid1={
x:0,
y:200,
w:40,
h:40
}
let asteroid2={
x:500,
y:0,
w:40,
h:40
}
let asteroid3={
x:0,
y:500,
w:40,
h:40
}
let asteroid4={
x:500,
y:500,
w:40,
h:40
}
//gameover variable
let gameOver=false; 

//canvas
function setup() {
createCanvas(500,500)

}


//call the commands
function draw() {
background(0,0,105);
 if (gameOver) {
        displayGameOver();
        return;
    }
drawPlanet();
movePlanet(planet);
moveasteroids();
drawasteroid1();
drawasteroid2();
drawasteroid3();
drawasteroid4();
checkCollision(asteroid1);
checkCollision(asteroid2);
checkCollision(asteroid3);
checkCollision(asteroid4);
  if (gameOver) {
        displayGameOver();
    }
}

//draw main red planet
function drawPlanet() {
push();
fill(255,0,0)
ellipse(planet.x, planet.y, planet.w, planet.h);
pop(); 
}

//make the red planet move with the mouse
function movePlanet(planet){
planet.x=mouseX
planet.y=mouseY
}
//draw the asteroids 
function drawasteroid1(){
push();
fill(random(255), random(255), random(255));
ellipse(asteroid1.x, asteroid1.y, asteroid1.w, asteroid1.h);
pop(); 
}
function drawasteroid2(){
push();
fill(random(255), random(255), random(255));
ellipse(asteroid2.x, asteroid2.y, asteroid2.w, asteroid2.h);
pop(); 
}
function drawasteroid3(){
push();
fill(random(255), random(255), random(255));
ellipse(asteroid3.x, asteroid3.y, asteroid3.w, asteroid3.h);
pop(); 
}
function drawasteroid4(){
push();
fill(random(255), random(255), random(255));
ellipse(asteroid4.x, asteroid4.y, asteroid4.w, asteroid4.h);
pop(); 
}

// Make asteroids move 
function moveasteroids() {
    asteroid1.x=asteroid1.x+1
    asteroid1.y=asteroid1.y+1
    asteroid2.x=asteroid2.x-1
    asteroid2.y=asteroid2.y+1
    asteroid3.x=asteroid3.x+1
    asteroid3.y=asteroid3.y-1
    asteroid4.x=asteroid4.x-1
    asteroid4.y=asteroid4.y-1
}
//create gameover screen when planet is hit
function checkCollision(asteroid) {
    let distance = dist(
        planet.x, 
        planet.y,
        asteroid.x, 
        asteroid.y
    );
let minimumDistance = planet.w / 2 + asteroid.w / 2;

    if (distance <= minimumDistance) {
        gameOver = true;
    }
}
function displayGameOver() {
  
        background(0);

        fill(255, 0, 0);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("GAME OVER", 250, 250);

        noLoop();
    }