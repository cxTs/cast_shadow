// init of the canvas
var canvas = document.getElementById("canvas");

var context = canvas.getContext('2d');
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
//


var light;

// walls init with canvas borders
var walls = [
    new Wall(0, 0, width, 0 ),
    new Wall(0, 0, 0, height ),
    new Wall(width, 0, width, height ),
    new Wall(0, height, width, height )
]

// put 5 random walls on the canvas
for(let i=0; i<5; i++) {
    let wall = new Wall(0, 0, 0, 0 );
    wall.newRandom();
    walls.push(wall);
}

window.onload = function(e) {
    //  create the light object when mouse is moved
    // args : position X, position Y, number of ray on the light, init a radius size (viewing light as a circle), color
    //comment the line 1 and uncomment the line 2 to see less rays and better see how they reach the wall and stop on it

    //1
    light = new Light(e.clientX, e.clientY, 2080, 30, "#CCCCFF08");

    //2
    //light = new Light(e.clientX, e.clientY, 180, 30, "#FFEEFF66");


    // show walls at the first move of the mouse
    for(w of walls) {
        w.show();
    }
    light.touch(walls);
    light.show();
}

document.onmousemove = function(e) {
    context.clearRect(0, 0, width, height );
    // show walls when the mouse is moved
    for(w of walls) {
        w.show();
    }
    light.follow(e, walls);
    light.show();
}
