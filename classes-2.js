/* 2. Implement a class that describes a regular marker. It should contain the following components: 

- a field that contains the color of the marker;
- a field that contains the amount of ink in the marker (in percentage);

- a method for input (the method takes a string and displays the HTML hexcode for the given color)
- Get and set methods for the amount of ink in the marker

Demonstrate the work of these methods.
 */


class Marker {
    color;
    ink;
    constructor(color, ink) {
    this.color = color;
    this.ink = ink;
    }
    get InkLevel() {
        return (this.ink + '%');
    }
    set InkLevel(ink) {
        this.ink = ink;
    }
    returnHexcode(color) {
        if (color = 'red') {
            return (`The hexcode for color ${color} is #FF0000`);
        }
        if (color = 'black') {
            return (`The hexcode for color ${color} is #000000`);
        }
    }
}

var marker1 = new Marker('black', 15);

// - Get and set methods for the amount of ink in the marker

marker1.InkLevel = 20;

console.log(marker1.InkLevel);

// - a method for input (the method takes a string and displays the HTML hexcode for the given color) 
// Question: Maybe I did not understand the problem, but how could the program know the hexcode? Is there another way to set the method? How I did it will only recognize 2 colors...

marker1.returnHexcode('black');
