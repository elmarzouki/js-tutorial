/* 
    =====================
    JavaScript Arithmetic 
    =====================
*/

// introduction
console.log("introduction")
var number = 16;
console.log("number = " + number + " which is " + typeof number);
var username = "iSuperMostafa";
console.log("username = " + username + " which is " + typeof username);
var user = {firstName:"Mostafa", lastName:"El-Marzouki", jobTitle: "Full Stack Developer"};
console.log("user = " + user + " which is " + typeof user);
console.log("============================================");

// The Concept of Data Types
console.log("The Concept of Data Types")
var x = 16 + "Volvo";
console.log("x = " + x + " which is " + typeof x);
var x = "Volvo" + 16;
console.log("x = " + x + " which is " + typeof x);
var x = 16 + 4 + "Volvo";
console.log("x = " + x + " which is " + typeof x);
var x = "Volvo" + 16 + 4;
console.log("x = " + x + " which is " + typeof x);
console.log("============================================");

// JavaScript Types are Dynamic.
console.log("JavaScript Types are Dynamic")
var y;
console.log("y = " + y + " which is " + typeof y);
var y = 5;
console.log("y = " + y + " which is " + typeof y);
var y = "iSuperMostafa";
console.log("y = " + y + " which is " + typeof y);
console.log("============================================");

// JavaScript Strings
console.log("JavaScript Strings");
var username = "iSuperMostafa";
console.log("username = " + username + " which is " + typeof username);
var username = 'iSuperMostafa';
console.log("username = " + username + " which is " + typeof username);

var x = "It's another good day!"; // Single quote inside double quotes
console.log("x = " + x + " which is " + typeof x);
var x = "My name is 'Mostafa El-Marzouki'"; // Single quotes inside double quotes
console.log("x = " + x + " which is " + typeof x);
var x = 'My name is "Mostafa El-Marzouki"'; // Double quotes inside single quotes
console.log("x = " + x + " which is " + typeof x);
console.log("============================================");

// JavaScript Numbers
console.log("JavaScript Numbers");
var x = 34.3;     // Written with decimals
console.log("x = " + x + " which is " + typeof x);
var x = 34;        // Written without decimals
console.log("x = " + x + " which is " + typeof x);
var x = 123e5;      // 12300000
console.log("x = " + x + " which is " + typeof x);
var x = 123e-5;     // 0.00123
console.log("x = " + x + " which is " + typeof x);
console.log("============================================");

// JavaScript Booleans
console.log("JavaScript Booleans");
var x = 5;
var y = 5;
var z = 6;
console.log("(x == y) " + (x == y));
console.log("(x == z) " + (x == z));
console.log("============================================");


// JavaScript Arrays
console.log("JavaScript Arrays");
var numbers = [1, 2, 3];
console.log("numbers = " + numbers + " which is " + typeof numbers);
var user = {firstName:"Mostafa", lastName:"El-Marzouki", jobTitle: "Full Stack Developer"};
console.log("user = " + user + " which is " + typeof user);
console.log("============================================");

// JavaScript Objects
console.log("JavaScript Objects");
var user = {firstName:"Mostafa", lastName:"El-Marzouki", jobTitle: "Full Stack Developer"};
console.log("user = " + user + " which is " + typeof user);
console.log("============================================");

// Undefined, Empty Values and Null
console.log("Undefined and Empty Values");
var car;
console.log("car = " + car + " which is " + typeof car);
var car = "";
console.log("car = " + car + " which is " + typeof car);
var car = null;
console.log("car = " + car + " which is " + typeof car);
var car = undefined;
console.log("car = " + car + " which is " + typeof car);
// Difference Between Undefined and Null
console.log(typeof undefined);           // undefined
console.log(typeof null);                // object

console.log(null === undefined);         // false
console.log(null == undefined);          // true
console.log("============================================");

// Primitive Data
console.log("Primitive Data");
console.log(typeof "iSuperMostafa");     // Returns "string" 
console.log(typeof 3.14);                // Returns "number"
console.log(typeof true);                // Returns "boolean"
console.log(typeof false);               // Returns "boolean"
console.log(typeof o);                   // Returns "undefined" (if x has no value)

// Complex Data
console.log("Complex Data");
console.log(typeof {name:'Mostafa', ID:1}); // Returns "object"
console.log(typeof [1,2,3,4]);                // Returns "object" (not "array", see note below)
console.log(typeof null);                     // Returns "object"
console.log(typeof function myFunc(){});      // Returns "function"