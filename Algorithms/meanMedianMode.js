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
}

function getMode(array) {
  // Your code
}

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}
