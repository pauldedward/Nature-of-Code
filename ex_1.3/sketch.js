
let x, y;

function setup() {

    createCanvas(400, 400);
    x = width / 2;
    y = height / 2;
    background(20);

}

function draw() {

    
    stroke(200);
    strokeWeight(2);
    point(x, y);

    let randomX = floor(random(3)) - 1;
    let randomY = floor(random(3)) - 1;
    
    let randomSelection = random(0, 1);

    if(randomSelection < .5) {
        if(mouseX > x) {
            randomX = 1;
        } else if( mouseX < x) {
            randomX = -1;
        } else {
            randomX = 0;
        }

        if(mouseY > y) {
            randomY = 1;
        } else if( mouseY < y) {
            randomY = -1;
        } else {
            randomY = 0;
        }

    } 

    x += randomX ;
    y += randomY ; 
   
}
function mousePressed() {
    console.log(mouseX);
}

