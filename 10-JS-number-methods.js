/* 
    =====================
    JavaScript Number Methods
    =====================
*/

// The toString() Method
var x = 123;
console.log(x);

x.toString();            // returns 123 from variable x
console.log(x);

console.log((123).toString());        // returns 123 from literal 123

console.log((100 + 23).toString());   // returns 123 from expression 100 + 23

// The toExponential() Method
var x = 9.656;
console.log(x);

console.log(x.toExponential(2));     // returns 9.66e+0

// The toFixed() Method
var x = 9.656;
console.log(x);

console.log(x.toFixed(0));           // returns 10
console.log(x.toFixed(2));           // returns 9.66

// The toPrecision() Method
var x = 9.656;
console.log(x);

console.log(x.toPrecision());        // returns 9.656
console.log(x.toPrecision(2));       // returns 9.7

// The valueOf() Method
var x = 123;
console.log(x);

console.log(x.valueOf());            // returns 123 from variable x
console.log((123).valueOf());        // returns 123 from literal 123
console.log((100 + 23).valueOf());   // returns 123 from expression 100 + 23

// The Number() Method
x = true;
console.log(Number(x));        // returns 1
x = false;     
console.log(Number(x));        // returns 0
x = new Date();
console.log(Number(x));        // returns 1404568027739
x = "10"
console.log(Number(x));        // returns 10
x = "10 20"
console.log(Number(x));        // returns NaN


// The parseInt() Method
console.log(parseInt("10"));         // returns 10
console.log(parseInt("10.33"));      // returns 10
console.log(parseInt("10 20 30"));   // returns 10
console.log(parseInt("10 years"));   // returns 10
console.log(parseInt("years 10"));   // returns NaN

// The parseFloat() Method
console.log(parseFloat("10"));        // returns 10
console.log(parseFloat("10.33"));     // returns 10.33
console.log(parseFloat("10 20 30"));  // returns 10
console.log(parseFloat("10 years"));  // returns 10
console.log(parseFloat("years 10"));  // returns NaN

var x = Number.MAX_VALUE;
console.log(x);

var x = 6;
var y = x.MAX_VALUE;
console.log(y);
