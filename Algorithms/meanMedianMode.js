/*
    #Functional Programming

    Three properties: Mean, Mean, Mode
    Four separate functions

    function getMean(array){
        // Your code
    }

    function getMedian(array){
        // Your code
    }

    function getMode(array){
        // Your code
    }

    function meanMedianMode(array){
        // Call other 3 functions
        // Return object which has mean, median, and mode
    }

    The "mode" is the number that is repeated most often.
    The "mean" is the "average."
    The "median" is the "middle" value in the list of numbers.
*/

function getMean(array) {
  var sum = 0;

  array.forEach(num => {
    sum += num;
  });

  var mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  // Sort array first - in ascending order
  array.sort(function(a, b) {
    return a - b;
  });
  var median;

  // Odd # of elements
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    var mid1 = array[array.length / 2 - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}

// #s that repeat most often
function getMode(array) {
  // Hash Table
  var modeObj = {};

  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  var maxFrequency = 0;
  var modes = [];

  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    // Case where current number has same frequency as maxFrequency
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // No mode if every number happens with same frequency
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}

// Testing Algorithm
array = [1, 2, 3, 4, 5, 4, 6, 1];
meanMedianMode(array);
// Works! { mean: 3.25, median: 3.5, mode: [ '1', '4' ] }
