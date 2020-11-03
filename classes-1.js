/* 1. Implement a class that describes a circumference. It should contain the following components: 

- a field that contains the radius of the circumference;
- a getter that returns the radius;
- a setter that sets the radius;
- a getter that returns the diameter;
- a method that calculates the content;
- a method that calculates the length of the circumference.

Demonstrate the work of properties and methods.  */

class Circle {
    radius;
    constructor(radius) {
    this.radius = radius;
    }
    get Radius() {
        return this.radius;
    }
    set Radius(radius) {
        this.radius = radius;
    }
    get Diameter() {
        this.radius = this.radius * 2;
        return this.radius;
    }
    calculateArea() {
        var area = this.radius * this.radius * Math.PI;
        console.log(area);
    } 
    calculateCircumference() {
        var circumference = 2 * this.radius * Math.PI;
        console.log(circumference);
    }   
}

var circle1 = new Circle(5);

// - a setter that sets the radius;
circle1.Radius = 4; 

// - a getter that returns the radius;
console.log(circle1.Radius); 

//- a getter that returns the diameter;
console.log(circle1.Diameter);

circle1.calculateArea();
circle1.calculateCircumference();

