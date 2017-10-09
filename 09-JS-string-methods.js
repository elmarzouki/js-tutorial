/* 
    =====================
    JavaScript String Methods
    =====================
*/

// String Length
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var len = alpha.length;
console.log("len = " + len);

// Finding a String in a String
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log("pos = " + pos);

var pos = str.lastIndexOf("locate");
console.log("pos = " + pos);

var pos = str.indexOf("locate",15);
console.log("pos = " + pos);
// Both the indexOf(), and the lastIndexOf() methods return -1 if the text is not found.

// Searching for a String in a String
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log("pos = " + pos);


// The slice() Method
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log("res = " + res);

// reverse slice
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log("res = " + res);

var res = str.slice(7);
console.log("res = " + res);

var res = str.slice(-12);
console.log("res = " + res);

// The substring() Method
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log("res = " + res);

// The substr() Method
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log("res = " + res);

// Replacing String Content
str = "I'm a string!";
console.log("str = " + str);

var strModified = str.replace("string", "string replacement");
console.log("strModified = " + strModified);

// replace is case sensitive
var strModified = str.replace("STRING", "string replacement");
console.log("strModified = " + strModified);

// Converting to Upper and Lower Case
var text1 = "Hello World!";
console.log("text1 = " + text1);
var text2 = text1.toUpperCase();
console.log("text2 = " + text2);

var text1 = "Hello World!";
console.log("text1 = " + text1);

var text2 = text1.toLowerCase();
console.log("text2 = " + text2);

// The concat() Method
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log("text3 = " + text3);


var text = "Hello" + " " + "World!";
console.log("text = " + text);

var text = "Hello".concat(" ", "World!");
console.log("text = " + text);

// The charAt() Method
var str = "HELLO WORLD";
var char = str.charAt(0);
console.log("char = " + char);

// The charCodeAt() Method
var str = "HELLO WORLD";
var charCode = str.charCodeAt(0);
console.log("charCode = " + charCode);

// Accessing a String as an Array is Unsafe
var str = "HELLO WORLD";
var char = str[0];
console.log("char = " + char);

// Converting a String to an Array
var str = "a b c d e f";
console.log("str = " + str);
var arr = str.split(" ");
console.log("arr = " + arr);

var text = "";
var i;
for (i = 0; i < arr.length; i++) {
    text += arr[i];
}
console.log("text = " + text);

