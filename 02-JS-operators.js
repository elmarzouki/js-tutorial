/* 
    =====================
    JavaScript Operators 
    =====================
*/

/* 
    ===========================================
        >> 01- JavaScript Arithmetic Operators
    ===========================================
*/
console.log("01- JavaScript Arithmetic Operators");
// assignment
var x = 10;
console.log("x = " + x);

// adding
var x = 5;
var y = 2;
var z = x + y;
console.log("z = x + y = " + z);

// Multiplying
var x = 5;
var y = 2;
var z = x * y;
console.log("z = x * y = " + z);

/*  
    See More:
    ==========

    Operator|	Description
    -------------------------------
    |   +	|   Addition
    -------------------------------
    |   -	|   Subtraction
    -------------------------------
    |   *	|   Multiplication
    -------------------------------
    |   /	|   Division
    -------------------------------
    |   %	|   Modulus
    -------------------------------
    |   ++	|   Increment
    -------------------------------
    |   --	|   Decrement
    -------------------------------
*/


/* 
    ===========================================
        >> 02- JavaScript Assignment Operators
    ===========================================
*/
console.log("02- JavaScript Assignment Operators");
// Assignment
var x = 10;
console.log("x = " + x);
x += 5;
console.log("x = " + x);

/*  
    See More:
    ==========

    Operator|  Example	|  Same As
    ----------------------------------
    |   =	|   x = y	|   x = y
    ----------------------------------
    |   +=	|   x += y	|   x = x + y
    ----------------------------------
    |   -=	|   x -= y	|   x = x - y
    ----------------------------------
    |   *=	|   x *= y	|   x = x * y
    ----------------------------------
    |   /=	|   x /= y	|   x = x / y
    ----------------------------------
    |   %=	|   x %= y	|   x = x % y
    ----------------------------------
*/

/*
    ===========================================
        >> 03- JavaScript String Operators
    ===========================================
*/
console.log("03- JavaScript String Operators");

str1 = "Mostafa";
str2 = "El-Marzouki";
str3 = str1 + " " + str2;
console.log("str3 = " + str3);

str1 = "Have a ";
str1 += "nice day";
console.log("str1 = " + str1);

// Adding Strings and Numbers
x = 5 + 5;
console.log("x = " + x);

y = "5" + 5;
console.log("y = " + y);

z = "Hello" + 5;
console.log("z = " + z);


/*
    ===========================================
        >> 04- JavaScript Comparison Operators
    ===========================================
*/
console.log("04- JavaScript Comparison Operators");

x = 5;
y = "5";
console.log("x == y :", x == y);
console.log("x === y :", x === y);

/*  
    See More:
    ==========

    Operator|	Description
    ----------------------------------------------
    |   ==	|   equal to
    ----------------------------------------------
    |  ===	|   equal value and equal type
    ----------------------------------------------
    |  !=	|   not equal
    ----------------------------------------------
    |  !==	|   not equal value or not equal type
    ----------------------------------------------
    |   >	|   greater than
    ----------------------------------------------
    |   <	|   less than
    ----------------------------------------------
    |   >=	|   greater than or equal to
    ----------------------------------------------
    |   <=	|   less than or equal to
    ----------------------------------------------
    |   ?	|   ternary operator
    ----------------------------------------------
*/

/*
    ===========================================
        >> 05- JavaScript Logical Operators
    ===========================================
*/
console.log("05- JavaScript Logical Operators");

x = true;
y = false;
console.log("y || x : ", y || x);
/*  
    See More:
    ==========

    Operator|	Description
    -------------------------------
    |   &&	|   logical and
    -------------------------------
    |   ||	|   logical or
    -------------------------------
    |   !	|   logical not
    -------------------------------
*/


/*
    ===========================================
        >> 06- JavaScript Type Operators
    ===========================================
*/
console.log("06- JavaScript Type Operators");
x = 5;
console.log("typeof x:", typeof x);
/*  
    See More:
    ==========

    Operator|	Description
    -------------------------------------------------------------------------
    |   typeof	    |   	Returns the type of a variable
    -------------------------------------------------------------------------
    |   instanceof	|   Returns true if an object is an instance of an object type
    -------------------------------------------------------------------------
*/


/*
    ===========================================
        >> 07- JavaScript Bitwise Operators
    ===========================================
*/
console.log("06- JavaScript Bitwise Operators");
x = 5;
y = 1;
z = 5 & 1;
console.log("5 & 1 :", z);
/*  
    See More:
    ==========

    Operator|	Des 	        |   Example	|   Same as	    |   Result	|Decimal
    ------------------------------------------------------------------------------
        &	|   AND	            |   5 & 1	|   0101 & 0001	|   0001    |   1
    ------------------------------------------------------------------------------
        |	|   OR	            |   5 | 1	|   0101 | 0001	|   0101	|   5
    ------------------------------------------------------------------------------
        ~	|   NOT	            |   ~ 5	    |   ~0101	    |   1010	|   10
    ------------------------------------------------------------------------------
        ^	|   XOR	            |   5 ^ 1	|   0101 ^ 0001	|   0100	|   4
    ------------------------------------------------------------------------------
        <<	|Zero fill left shift|	5 << 1	|   0101 << 1	|   1010	|   10
    ------------------------------------------------------------------------------
        >>	|Signed right shift |	5 >> 1	|   0101 >> 1	|   0010	|   2
    ------------------------------------------------------------------------------
        >>>	|Zero fill right shift|	5 >>> 1	|   0101 >>> 1	|   0010	|   2
    ------------------------------------------------------------------------------
*/