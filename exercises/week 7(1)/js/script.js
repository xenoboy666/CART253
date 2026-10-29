
let arrayOfOddNumbers=[1,3,5,7,9,11,13,15, 17];
let currentArrayPosition=0;
let sentence= "hello Nathan"; 
let dialogueOptions=["", "yes","no","maybe","perchance","absolutly not", "for sure", ]
let dialogueOptionsIndex=0;

function setup() {
 createCanvas(500,500);
background('skyblue'); 
//lenght
console.log(arrayOfOddNumbers.length)// do not forget 
console.log(arrayOfOddNumbers[8])
arrayOfOddNumbers[3]=21
console.log(arrayOfOddNumbers[3])
arrayOfOddNumbers[9]=31
console.log(arrayOfOddNumbers[9])
console.log(arrayOfOddNumbers[currentArrayPosition])
//displayText(sentence);
console.log(dialogueOptions.length)
let newSquare=creatSquare();
drawSquare(newSquare)
}

let square= {
  x:200,
  y:100,
  w:20,
  h:70
}
let squareTwo= {
  x:300,
  y:100
}
function addTwoNumbers(valA, valB){
  let valC=valA+valB
  return valC;
}

function createSquare(){
let square= {
  x:200,
  y:100,
  w:20,
  h:70
}
return square; 
}
function draw() {
drawSquare(100,100); 
drawSquareTwo(square);
drawSquareTwo(squareTwo);
let returnedValue=addTwoNumbers(20,70);
console.log(returnedValue)
let returnedValue_two=addTwoNumbers(400,70);
console.log(returnedValue_two)
displayText(dialogueOptions[dialogueOptionsIndex])
}
function mousePressed(){
  if (dialogueOptionsIndex<dialogueOptions.length-1){
   
dialogueOptionsIndex=dialogueOptionsIndex+1
} 
else{
  dialogueOptionsIndex=0
}
}
function keyPressed(){
  let newElement="*";
  dialogueOptions[8]=newElements;
}

function drawSquare(x1,y){
  push();
  fill(255,0,255);
  rect(x1,y,40,40);
  pop();
  }
  function drawSquareTwo(avocado){
  push();
  fill(255,0,255);
  rect(avocado.x, avocado.y, 40,40);
  pop();
  }
  function displayText(referenceString){
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER); 
    text(referenceString, width/2, height/2);
    text(dialogueOptionsIndex,width/2,300)
    pop(); 
   }  
