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
let flowerOne={
x:100,
y:500-150,
width:20,
height:150,
petal_width:75,
fillStem:"DarkMagenta",
strokePetal:"DarkOrchid",
fillPetal:"HotPink",
}
let flowerTwo={
x:200,
y:500-80,
width:20,
height:80,
petal_width:50,
fillStem:"DarkMagenta",
strokePetal:"DarkTurquoise",
fillPetal:"DeepPink",
}
let flowerThree={
x:350,
y:500-80,
width:20,
height:80,
petal_width:50,
fillStem:"DarkMagenta",
strokePetal:"DarkBlue",
fillPetal:"MediumPink",
}

let flowers=[flowerOne,flowerTwo,flowerThree]

function setup() {
createCanvas(500,500);
let FourthFlower=createFlower(350, 200, 20, 100, 80);
flowers.push(FourthFlower);
console.log(flowers)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background('DodgerBlue');
for(let i=0; i<flowers.length; i++){
drawFlower(flowers[i])
}
    }


function drawFlower(flower){
//stem
push();
noStroke();
fill(flower.fillStem);
rect(flower.x,flower.y,flower.width,flower.height);
pop();
//petal 
push();
stroke(flower.strokePetal);
fill(flower.fillPetal);
ellipse(flower.x+flower.width/2,flower.y-flower.petal_width/2,flower.petal_width,flower.petal_width);
pop();
}
function createFlower(stemX,stemY,stemWidth,stemHeight,petaliwdth){
    let tempFlower={
        x:stemX,
        y:stemY,
        width:stemWidth,
        height:stemHeight,
        petal_width:petaliwdth,
        fillStem:"DarkMagenta",
        strokePetal:"DarkOrchid",
        fillPetal:"HotPink",
    }
    return tempFlower;
    }
function mousePressed(){
    let newFlower=createFlower(mouseX,mouseY-100,20,100,80);
    flowers.push(newFlower);
    console.log(flowers)
}