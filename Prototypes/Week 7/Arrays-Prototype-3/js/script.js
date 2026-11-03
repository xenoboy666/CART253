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

//Make spider follow mouse
spider.x = mouseX;
spider.y = mouseY;

//draw spider
fill(20);
ellipse(spider.x, spider.y, spider.size, spider.size);

//Draw spider eyes
fill(255);
ellipse(spider.x-8, spider.y-5, 8);
ellipse(spider.x+8, spider.y-5, 8);

//Loop between flies
 for (let i = 0; i < flies.length; i++) {

        let fly = flies[i];
}
//move flies to the center
 let angle = atan2(250 - fly.y, 250 - fly.x);

        fly.x += cos(angle) * fly.speed;
        fly.y += sin(angle) * fly.speed;

//Draw flies
 fill(200);
ellipse(fly.x, fly.y, fly.size);

//Draw fly wings
 fill(255);
        ellipse(fly.x - 5, fly.y - 5, 8, 5);
        ellipse(fly.x + 5, fly.y - 5, 8, 5);

}