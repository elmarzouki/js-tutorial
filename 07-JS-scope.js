/* 
    =====================
    JavaScript Scope 
    =====================
*/

// Local JavaScript Variables
try {console.log("x = " + x);}
catch(e) { console.log("x says you can't see me!"); }
function myXFunction() {
    var x = "you can see me!";
    console.log("x says " + x);
}
myXFunction();
// Global JavaScript Variables
var y = "you can see me!";
console.log("y says " + y);
function myYFunction() {
    console.log("y says " + y);
}
myYFunction();
// Automatically Global
myZFunction();
console.log("z says " + z);
function myZFunction() {
    z = "you can see me!";
    console.log("z says " + z);
}
myZFunction();