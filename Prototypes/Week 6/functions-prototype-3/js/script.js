//variables for the eggs
let egg1={
    x:150,
    y:0,
    w:10,
    h:20,
    hatched:false
};
let egg2={
    x:250,
    y:0,
    w:10,
    h:20,
    hatched:false
};
let egg3={
    x:400,
    y:0,
    w:10,
    h:20,
    hatched:false
};
//variable basket
let basket={
    x:250,
    y:800,
    w:150,
    h:80
};


//create canvas
function setup() {
createCanvas(500,1000);
}


//call command
function draw() {
background(0,100,0);
checkHatch(egg1);
checkHatch(egg2);
checkHatch(egg3);
drawegg1();
drawegg2();
drawegg3();
drawbasket();
moveEggs();
movebasket();
}
//draw the eggs
function drawegg1(){
      if (egg1.hatched) {
        drawBird(egg1);
    } else {
    push();
    fill(255,255,255)
    ellipse(egg1.x,egg1.y,egg1.w,egg1.h)
    pop();
}}
function drawegg2(){
     if (egg2.hatched) {
        drawBird(egg2);
    } else {
    push();
    fill(255,255,255)
    ellipse(egg2.x,egg2.y,egg2.w,egg2.h)
    pop();
}}
function drawegg3(){
    if (egg3.hatched) {
        drawBird(egg3);
    } else {
    push();
    fill(255,255,255)
    ellipse(egg3.x,egg3.y,egg3.w,egg3.h)
    pop();
}}
//draw basket
function drawbasket(){
    push();
fill(150, 75, 0);
    arc(basket.x, basket.y,basket.w, basket.h, 0, PI);
    pop();
}
//make the eggs fall
function moveEggs(){
egg1.y=egg1.y+3
egg2.y=egg2.y+2.5
egg3.y=egg3.y+4
}
//move basket 
function movebasket(){
    basket.x=mouseX
}
//make the birds 
function drawBird(egg){
    push();
 // Body
    fill(255, 220, 0);
    ellipse(egg.x, egg.y, 25, 20);

    // Beak
    fill(255, 120, 0);
    triangle(
        egg.x + 10, egg.y,
        egg.x + 17, egg.y + 3,
        egg.x + 10, egg.y + 6
    );

    pop();
}

//make the bird appear 
function checkHatch(egg) {
    if (
        !egg.hatched &&
        egg.y + egg.h / 2 >= basket.y - basket.h / 2 &&
        egg.x >= basket.x - basket.w / 2 &&
        egg.x <= basket.x + basket.w / 2
    ) {
        egg.hatched = true;
    }
}
