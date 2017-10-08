/* 
    =====================
    JavaScript Objects 
    =====================
*/
// Object Definition
var user = {firstName:"Mostafa", lastName:"El-Marzouki", jobTitle: "Full Stack Developer"};
var user = {
    firstName:"Mostafa", 
    lastName:"El-Marzouki", 
    jobTitle: "Full Stack Developer",
    fullName: function() { return this.firstName + " " + this.lastName;}
};

console.log("user.firstName = " + user.firstName);
console.log('user["firstName"] = ' + user.firstName);
console.log('user.fullName() = ' + user.fullName());

// Do Not Declare Strings, Numbers, and Booleans as Objects!
console.log("Do Not Declare Strings, Numbers, and Booleans as Objects!");
var x = new String();        // Declares x as a String object
console.log(typeof x);
var x = new Number();        // Declares y as a Number object
console.log(typeof x);
var x = new Boolean();       // Declares z as a Boolean object
console.log(typeof x);