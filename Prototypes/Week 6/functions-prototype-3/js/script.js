//variables for the eggs
let egg1={
    x:150,
    y:0,
    w:10,
    h:20
}
let egg2={
    x:250,
    y:0,
    w:10,
    h:20
}
let egg3={
    x:400,
    y:0,
    w:10,
    h:20
}
//variable basket
let basket={
    x:250,
    y:800,
    w:150,
    h:80
}
//create canvas
function setup() {
createCanvas(500,1000);
}


//call command
function draw() {
background(0,100,0);
drawegg1();
drawegg2();
drawegg3();
drawbasket();
}
//draw the eggs
function drawegg1(){
    push();
    fill(255,255,255)
    ellipse(egg1.x,egg1.y,egg1.w,egg1.h)
    push();
}
function drawegg2(){
    push();
    fill(255,255,255)
    ellipse(egg2.x,egg2.y,egg2.w,egg2.h)
    push();
}
function drawegg3(){
    push();
    fill(255,255,255)
    ellipse(egg3.x,egg3.y,egg3.w,egg3.h)
    push();
}
//draw basket
function drawbasket(){
    push();
fill(150, 75, 0);
    arc(basket.x, basket.y,basket.w, basket.h, 0, PI);
    pop();
}