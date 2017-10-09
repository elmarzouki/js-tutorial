/* 
    =====================
    JavaScript conditions-and-loops
    =====================
*/

// conditions

// if-else
var time = 5;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

// switch
switch (new Date().getDay()) {
    default: 
        text = "Looking forward to the Weekend";
    case 0:
        text = "Today is Sunday";
        break;
    case 1:
        text = "Today is Monday";
        break;
    case 2:
        text = "Today is Tuesday";
        break;
    case 3:
        text = "Today is Wednesday";
        break;
    case 4:
        text = "Today is Thursday";
        break;
    case 5:
        text = "Today is Friday";
        break;
    case 6:
        text = "Today is Saturday";
}
console.log(text);

// for loop
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
for (i = 0, text = ""; i < fruits.length; i++) {
    text += fruits[i] + " ";
}
console.log(text);

// The For/In Loop
var user = {firstName:"Mostafa", lastName:"El-Marzouki", jobTitle: "Full Stack Developer"};

var text = "";
for (var idx in user) {
    text += user[idx] + " ";
}
console.log(text);

// The While Loop
var text = "";
var i=0;
while (fruits[i]) {
    text += fruits[i] + " ";
    i++;
}
console.log(text);

// The Break Statement
var text = "";
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "\n";
}
console.log(text);

console.log('*************************');
// The Continue Statement
var text = "";
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "\n";
}
console.log(text);

// Throw and Try to Catch
throw "Too big";    // throw a text
throw 500;          // throw a number

var num = 1;
var x;

try {
    num.toUpperCase();   // You cannot convert a number to upper case
    x = y + 1;   // y cannot be referenced (used)
}
catch(err) {
    console.log(err.name);
}