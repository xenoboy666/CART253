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
function setup() {

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }

};
let sky = {
  x: 400,
  y: 400,
  //colour
  fill: {
    r: 0,
    g: 0,
    b: 225
  }
};
let bird = {
  // Position and size
  x: 10,
  y: 100,
  size: 100,
  // Colour
  fill: {
    r: 0,
    g: 255,
    b: 0,
  }

};

let anger = {
y: 0

};
/**
 * Create the canvas
 */
function setup() {
  createCanvas(sky.x, sky.y);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.fill.r, sky.fill.g, sky.fill.b);
  //day to night
sky.fill.r= sky.fill.r -1;
sky.fill.g= sky.fill.g -1;
sky.fill.b= sky.fill.b -1;
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

mrFurious.fill.r= mrFurious.fill.r +1;
mrFurious.fill.g= mrFurious.fill.g -1;
mrFurious.fill.b= mrFurious.fill.b -1;

mrFurious.y=mrFurious.y+random(-anger.y,anger.y) 
anger.y=anger.y+1
constrain(anger.y,0,10)

//Draw bird

fill(bird.fill.r,bird.fill.g,bird.fill.b);
ellipse(bird.x,bird.y,bird.size,bird.size);

bird.x=bird.x+1
}


