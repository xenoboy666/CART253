 //UFO variable
 let ufo = {
    x:300,
    y:100,
    w:120,
    h:50,
    speed:2
};
//cows variable
let cows = [
    { x: 100, y: 400, speed: 1, abducted: false },
    { x: 250, y: 400, speed: 1, abducted: false },
    { x: 400, y: 400, speed: 1, abducted: false }
];

//ufo beam variable
let beam = {
    x: 250,
    y:150,
    w:100,
    h:250
};
//Abduction variable
let abducted= false;

//function canvas
function setup() {
createCanvas(500, 500);
}


 
function draw() {
background(0,20,60);

//move the ufo with the mouse
ufo.x = mouseX;
ufo.y = mouseY; 

//draw ground
fill(0, 100, 0);
rect(0, 350, 500, 150);

//draw tree trunk
fill(139, 69, 19);
rect(50, 250, 30, 100);

//draw tree leaves
fill(0, 100, 0);
ellipse(65, 250, 100, 100);

//draw the ufo
    fill(150);
    ellipse(ufo.x, ufo.y, ufo.w, ufo.h);
       
fill(150);
 ellipse(ufo.x, ufo.y - 10, 60, 35);



// Loop through all cows
for (let i = cows.length - 1; i >= 0; i--) {

    let cow = cows[i];

    // Check if UFO is close to cow
    if (dist(ufo.x, ufo.y, cow.x, cow.y) < 80) {
        cow.abducted = true;
    }

    // Draw beam
    if (cow.abducted) {
        fill(100, 255, 255, 80);

        triangle(
            ufo.x - 40, ufo.y + 20,
            ufo.x + 40, ufo.y + 20,
            cow.x, cow.y
        );
    }

    // Move cow upwards
    if (cow.abducted) {
        cow.y -= cow.speed;
    }  

    // Draw cow body
    fill(255);
    ellipse(cow.x, cow.y, 50, 60);


    // Remove cow when it reaches UFO
    if (cow.y < ufo.y + 40 && cow.abducted) {
        cows.splice(i, 1);
    }


}


//function for abduction if SPACE is pressed
function keyPressed() {
    if (key === ' ') {
        abducted = true;
    }


}
}
