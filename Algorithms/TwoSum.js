/*  
    Two Sum

    Will take two parameters.
    function twoSum(numArray, sum){
        // F(n) will return every pair of numbers from 'numArray'
        that adds up to the 'sum'
    }

    example
    numArray = [ 1, 6, 4, 5, 3, 3]  sum = 7
    We should get result = [ [6,1], [3,4], [3,4]]

    Guidelines:
    1. Result should be an array of arrays
    2. Any number in the 'numArray' can be used in multiple pairs.

    Hint: 
    1. can be done in O(n^2) time complexity
    2. can be done in O(n) time complexity (more performing, utlizies hash table, like MeanModeMedian)
*/

// O(n) time complexity
function twoSum(numArray, sum) {
  var pairs = [];
  var hashtable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    // Define counterpart
    var counterpart = sum - currNum;
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    // Push current number into hastable
    hashtable.push(currNum);
  }

  return pairs;
}
/*
numArray = [1, 6, 4, 5, 3, 3];
sum = 7;
console.log(twoSum(numArray, sum)); */
// Output: [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]
// Works

// Test 2
numArray = [40, 11, 19, 17, -12];
sum = 28;
console.log(twoSum(numArray, sum));
// Output: [ [ 17, 11 ], [ -12, 40 ] ]
// Works
