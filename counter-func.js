/*
    Instructions
    ---
    Write a function that will keep track of how many times it was called
    and returns that number

    All functionally should be inside the function only

    function myFunc(){
        // Your code logic here
    }

    console.log(myFunc()); // returns 1
    console.log(myFunc()); // returns 2
    console.log(myFunc()); // returns 3

*/

function counterFunc() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}
console.log(counterFunc());

const instanceOne = counterFunc();
const instanceTwo = counterFunc();

console.log("instanceOne: ", instanceOne);
console.log("instanceOne: ", instanceOne);
console.log("instanceOne: ", instanceOne);
console.log("-----");
console.log("instanceTwo: ", instanceTwo);
console.log("instanceTwo: ", instanceTwo);
console.log("instanceTwo: ", instanceTwo);

// With Global Variable
var myFuncCalls = 0;

function myFunction() {
  myFuncCalls++;
  console.log(`Been called ${myFuncCalls} times.`);
}
