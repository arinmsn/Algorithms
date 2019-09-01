/*
    Array will be reversed and returned to user.
    Do not push elements into a new array and return that array.
    Be sure to manipulate the array passed in.
    Do not use array.reverse() method

*/

function reverseArrayInPlace(arr) {
  // arr.length / 2 = we want to go through half of the array
  // Otherwise, we will end up with the same arry
  for (var i = 0; i < arr.length / 2; i++) {
    // Switch first with last item
    // Switch second item with 2nd to last item
    var tempVar = arr[i];
    // first 3rd element = 3rd from the last item
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}

// arr = [1, 2, 3, 4, 5, 6];  Works
arr = [99, 98, 97, 96, 95, 94]; // Works
reverseArrayInPlace(arr);
