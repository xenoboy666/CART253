//spider variables
let spider ={
    x: 250,
    y: 250,
    size:40
};
//array for the flies
let flies=[];

function setup() {
createCanvas(500, 500);

//create 12 flies and add to array
 for (let i = 0; i < 12; i++) {
        let fly = {
            x: random(width),
            y: random(height),
            size: 15,
            speed: 1
        };

        flies.push(fly);
}
}



function draw() {
background(50,100,50);

//
}