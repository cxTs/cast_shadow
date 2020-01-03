class Vector {
    context = document.getElementById("canvas").getContext('2d');
    ////
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// PROTO //

// move the vector to the x and y passed in arguments
Vector.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}

// give the distance between to vectors
Vector.prototype.distanceFrom = function(vector) {
    return Math.sqrt( Math.pow((vector.x-this.x), 2) + Math.pow((vector.y-this.y), 2) );
}

// draw the vector on canvas
Vector.prototype.show = function() {
    this.context.strokeStyle = "#F00";
    this.context.lineWidth = 1;
    Draw.arc(this.context, this, 2, 0, (Math.PI * 2));
}
