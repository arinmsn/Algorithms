/*

    Input: initial unsorted array

    Array is split into several arrays are compared
    against each other and result is merged into one array. 


    function mergeSort(arr){
        // Input is a single, unsorted array as a 
        // parameter split the array into two halves
    }

    function merge (array1, array2) {
        // Takes in two sorted arrays a parameters
        // merges those sorted arrays into one sorted array
        // returns one sorted array
    }
 

*/

// Takes an unsorted array and splits it
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  var middleIndex = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  // Two sorted arrays
  // We will compare first element from each
  // array against each other and push
  // the one with lesser value into another array.
  var result = [];
  while (array1.length && array2.length) {
    var minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }

  // A new array is returned - keeps things sorted correctly
  if (array1.length) result = result.concat(array1);
  else result = result.concat(array2);

  return result;
}

array = [100, 50, 25, 1000, 250, 500, 750, 2, 0, 4];
mergeSort(array); // [ 0, 2, 4, 25, 50, 100, 250, 500, 750, 1000 ]
