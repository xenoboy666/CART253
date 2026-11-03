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
// Make spider follow mouse
    spider.x = mouseX;
    spider.y = mouseY;

    // draw spider
    fill(20);
    ellipse(spider.x, spider.y, spider.size, spider.size);

    // Draw spider eyes
    fill(255);
    ellipse(spider.x - 8, spider.y - 5, 8);
    ellipse(spider.x + 8, spider.y - 5, 8);

    // Loop through flies
    for (let i = 0; i < flies.length; i++) {

        let fly = flies[i];

        // move flies to the center
        let angle = atan2(250 - fly.y, 250 - fly.x);

        fly.x += cos(angle) * fly.speed;
        fly.y += sin(angle) * fly.speed;

        // Draw flies
        fill(200);
        ellipse(fly.x, fly.y, fly.size);

        // Draw fly wings
        fill(255);
        ellipse(fly.x - 5, fly.y - 5, 8, 5);
        ellipse(fly.x + 5, fly.y - 5, 8, 5);

        // Check collision with spider
        let d = dist(spider.x, spider.y, fly.x, fly.y);

        if (d < spider.size / 2 + fly.size / 2) {

            // Eat the fly
            flies.splice(i, 1);

            // Grow the spider
            spider.size += 5;

            // Correct index after removing a fly
            i--;
        }
    }

    // Show number of flies left
    fill(255);
    textSize(18);
    text("Flies left: " + flies.length, 20, 30);

    // Victory message
    if (flies.length === 0) {
        textSize(35);
        text("SPIDER WINS!", 130, 250);
    }
}
