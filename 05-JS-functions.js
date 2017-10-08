/* 
    =====================
    JavaScript Functions 
    =====================
*/
function rectanglePerimeter(Height, Width) {
    return Height * Width;
}

var x = rectanglePerimeter(4, 3);
console.log("rectanglePerimeter = " + x);

// The () Operator Invokes the Function
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

// Functions Used as Variable Values
var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";
console.log(text);
var text = "The temperature is " + toCelsius(77) + " Celsius";
console.log(text);