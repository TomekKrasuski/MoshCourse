//Factory Function - starts with camelNotation
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log(`Circle with radius of ${radius}`);
        }
    };
}

const circle = createCircle(1).draw();

//Constructor Function - starts wit PascalNotation
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log(`Circle2 with radius of ${radius}`);
    }
}

const circle2 = new Circle(1).draw();