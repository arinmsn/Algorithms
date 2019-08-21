/*
    Write a function that will return total of all 3 numbers.
    input: tripleAdd(10)(20)(30)  // returns 60
    Topics: Currying function
*/

// Solution
function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

tripleAdd(10)(20)(30);

// Another example
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}

tripleAdd1(10, 20, 30);

// QuadrupleAdd
function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}

quadrupleAdd(10)(20)(30, 40);
