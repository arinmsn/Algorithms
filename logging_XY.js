/*
    Instructions
    ---
    What is the value of y and value of x?

*/

(function() {
	var x = (y = 200);
})();

console.log("y: ", y);
console.log("x: ", x);

/* Output: 
    y: 200
    ReferenceError: x is not defined.

    Solution:
    Variable x is defined within the scope of the IIFE function.
    We cannot access the x variable outside, so we get an error.

    Variable y
    Is var x = y = 200 is similiar to var y = 200, x = y;
    This is what is happening.
    Under the hood, variable y = 200 as a global variable w/o the 'var' and 
    var x =y;

    One way to remedy this si to use 'use strict'; on top of our file. 
    Or use the 'use strict' inside the function.
*/
