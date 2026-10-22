

let circleX = 250;
let circleY = 250;

function setup() {
  createCanvas(500, 500);
  background("skyblue");

  let newVal = squareNum(2);
  let newVal_2 = squareNum(5);

  console.log(newVal);
  console.log(newVal_2);
}

function squareNum(num) {
  return num * num;
}

function calculateDistance(objX, objY) {
  let d = dist(mouseX, mouseY, objX, objY);
  let mappedVal = map(d, 0, 250, 2, 10);
  return constrain(mappedVal, 2, 10);
}

function draw() {
  background("skyblue");

  complexCicrlces();
  complexCicrlces_2();
  complexCicrlces_3();

  let newStroke = calculateDistance(circleX, circleY);

  complexCicrlces_P(circleX, circleY, 80, 80);
  complexCicrlces_P(490, 490, 80, 80);
  complexCicrlces_P(250, 450, 200, 200);
}

function complexCicrlces() {
  push();
  noStroke();
  fill(255, 191, 0);
  ellipse(width / 2, height / 2, 80, 80, weight);
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 60, 60, weight);
  fill(255, 191, 0);
  ellipse(width / 2, height / 2, 40, 40, weight);
  pop();
}

function complexCicrlces_2() {
  push();
  noStroke();
  fill(255, 191, 0);
  ellipse(width / 2 - 100, height / 2, 80, 80);
  fill(255, 0, 0);
  ellipse(width / 2 - 100, height / 2, 60, 60);
  fill(255, 191, 0);
  ellipse(width / 2 - 100, height / 2, 40, 40);
  pop();
}

function complexCicrlces_3() {
  push();
  noStroke();
  fill(255, 191, 0);
  ellipse(width / 2 - 100, height / 2 - 100, 80, 80);
  fill(255, 0, 0);
  ellipse(width / 2 - 100, height / 2 - 100, 60, 60);
  fill(255, 191, 0);
  ellipse(width / 2 - 100, height / 2 - 100, 40, 40);
  pop();
}

function complexCicrlces_P(x, y, w, h, weight) {
  push();

  strokeWeight(weight);
  fill(255, 191, 0);
  ellipse(x, y, w, h);

  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, w - 20, h - 20);

  fill(255, 191, 0);
  ellipse(x, y, w - 40, h - 40);

  pop();
}
