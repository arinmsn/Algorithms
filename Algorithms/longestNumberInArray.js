// Write a function that returns largest number from
// each sub-array

arr = [
  [10, 5, 7, 1],
  [49, 13, 41, 43],
  [55, 129, 80, 199],
  [838, 610, 999, 750],
  [4000, 2303, 1120, 3920]
];

function largestNumber(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
  }
  return results;
}

console.log(largestNumber(arr)); // Should return [10, 49, 199, 999, 4000]

// Solution 2
function largestNumber(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}

// Solution 3
function largestNumber(arr) {
  // Math.max([ ... ]) cannot be applied directly
  return arr.map(Function.apply.bind(Math.max, null));
}
