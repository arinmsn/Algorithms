/*
    1. What is an IIFE and why are they used?
    IIFE: Immediately Invoekd Function Expression
    It's executed right after it is created
    
    2. Code out an example of IIFE.
*/

// 2. Solution
function addTen(num) {
  return num + 10;
}
addTen(10); // 20

// IIFE implementaiton:
(function addTen(num) {
  return num + 10;
})(10);

/*  What is the point/usage of IIFE
    We can preserve private scope within the function
    It can help us prevent overriding a global variable.
*/
