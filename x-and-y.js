/*

var x = 10;

function y() {
    // Under the hood
    // function x() {} is hoisted to top of F(n)
    x = 100;
    return;
    //function x() {}
}

y();

console.log(x);


We get output of 10!
No code is run after 'return'
This happens because of hoisting.

*/
