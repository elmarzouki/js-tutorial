/* 
    =====================
    JavaScript Arrays
    =====================
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

// Converting Arrays to Strings
var x = fruits.toString();
console.log(x);

var x = fruits.join(" * ");
console.log(x);

// Popping and Pushing
var x = fruits.pop();
console.log(x);
console.log(fruits);

var x = fruits.push("Kiwi");
console.log(x);
console.log(fruits);

// Shifting Elements
fruits.shift();     // Removes the first element "Banana" from fruits
console.log(fruits);

fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
console.log(fruits);

// Changing Elements
fruits[0] = "Watermelon";
console.log(fruits);

fruits[fruits.length] = "Blueberry";
console.log(fruits);

// Deleting Elements
delete fruits[0];           // Changes the first element in fruits to undefined
console.log(fruits);

// Splicing an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// Using splice() to Remove Elements
fruits.splice(0, 1);        // Removes the first element of fruits
console.log(fruits);

// Merging (Concatenating) Arrays
var normalFruits = ["Banana", "Orange", "Apple", "Mango"];
var fruitsILike = ["Blueberry", "Lemon", "Kiwi"];
var fruits = normalFruits.concat(fruitsILike);
console.log(fruits);

var fruits = normalFruits.concat("Blueberry", "Lemon", "Kiwi");
console.log(fruits);


// Slicing an Array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 4);
console.log(citrus);


// Automatic toString()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();            // Sorts the elements of fruits
console.log(fruits);

fruits.reverse();         // Reverses the order of the elements
console.log(fruits);
