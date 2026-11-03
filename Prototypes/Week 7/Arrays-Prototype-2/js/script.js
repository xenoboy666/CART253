 //UFO variable
 let ufo = {
    x:300,
    y:100,
    w:120,
    h:50,
    speed:2
};
//cow variable
let cow = {
    x:250,
    y:400,
    w:60,
    h:25,
    speed:1
};

//ufo beam variable
let beam = {
    x: 250,
    y:150,
    w:100,
    h:250
};
//Abduction variable
let abducting= false;

//function canvas
function setup() {
createCanvas(500, 500);
}


 
function draw() {
background(0,20,60);

//draw the ufo
    fill(150);
    ellipse(ufo.x, ufo.y, ufo.w, ufo.h);
       
fill(150);
 ellipse(ufo.x, ufo.y - 10, 60, 35);
//move the ufo with the mouse
ufo.x = mouseX;
ufo.y = mouseY; 
    //draw the beam
    if (abducting) {
        fill(100, 255, 255, 80);
        triangle(
            ufo.x - 40, ufo.y + 20,
            ufo.x + 40, ufo.y + 20,
            cow.x, cow.y
        );
}
//draw the cow
    fill(255);
    ellipse(cow.x, cow.y, cow.w, cow.h);

//cow levitation
 if (abducting) {
        cow.y -= cow.speed;
    }
//cow flies to the ufo
  if (cow.y < ufo.y + 40) {
        abducting = false;
    }
}


//function for abduction if SPACE is pressed
function keyPressed() {
    if (key === ' ') {
        abducting = true;
    }
}

