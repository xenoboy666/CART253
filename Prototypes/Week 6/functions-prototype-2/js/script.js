
//variable for prisoner 
let prisoner={
    x:950,
    y:250,
    w:100,
    h:100
}
//variable for jail wall
let jailwall={
    x:400,
    y:0,
    w:10,
    h:0
}


//create canvas
function setup() {
createCanvas(1000,500);
}

//call commands
function draw() {
background(0,0,0);
drawprisoner();
movejailwall();
drawjailwall(); 
moveprisoner();
}

//draw prisoner

function drawprisoner() {
    push();
    fill(255, 255, 255);

    triangle(prisoner.x, prisoner.y - prisoner.h / 2,prisoner.x - prisoner.w / 2, prisoner.y + prisoner.h / 2,prisoner.x + prisoner.w / 2, prisoner.y + prisoner.h / 2);

    pop();
}
 
//draw jailwall
function drawjailwall(){
    push();
    fill(255,255,255);
    rect(jailwall.x,jailwall.y,jailwall.w,jailwall.h)
    pop();
}
//make the prisoner walk
function moveprisoner(){
    prisoner.x=prisoner.x-1
}
//pull jailwall down with mouse
function movejailwall(){
jailwall.h=mouseY;
}
