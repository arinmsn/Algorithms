// Describe variable and function hoisting
// How does it work in JS?

/*  Variables & functions are hoisted to the top of the scope
    in which they are declared.

    */

// Variable Hoisting

console.log(color); // Output: undefined (hoisted but not equal to any value!)

var color = "blue";

console.log(color); // blue

// Variable Hoisting (How JS Interpreter sees)

var color; // JS interpreter first declares variable

console.log(color); // undefined

color = "blue"; // JS Interpreter then equals color to correct value

console.log(color); // blue

//  Function hoisting

var getProduct; // JS interpreter

console.log(getProduct(2, 3)); // TypeError: getProdcut is not a function

// Function expression
var getProduct = function(num1, num2) {
  return num1 * num2;
};

console.log(getProduct(2, 3)); // Output: 6

// Function declaration

console.log(getProduct(2, 3)); // Output: 6

function getProduct(num1, num2) {
  return num1 * num2;
}

// Hoisting takes place inside F(n)

var globalVar = "global";

// Functions and variables will not hoist to top of file.
// They will be hoisted to the top of the below function only.
(function() {
  var name = "Mary";

  var getAge = function() {
    return "43";
  };

  function getState() {
    return "California";
  }
})();
