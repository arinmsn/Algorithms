// Considering the following function, what will the output be?

var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber();

/*
    Soultion:   // undefined
    We won't get 50 or 100!
    If we change both 'var' s to 'let'
    we would get an actual error.
    ReferenceError: num is not defined.
*/

var num = 50;

function logNumber() {
  var num; // JS Interpreter hoists num (declares it to top of F(n)
  // but the num is not assigned any value, so we get undefined
  console.log(num);
  var num = 100;
}

logNumber();
