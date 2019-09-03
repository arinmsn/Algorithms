/*  function binarySearch(numArray, key){
        // Your code.
    }

    Search for a given value (key) inside of a list (numArray)
    It is very performant. It runs in O(log n) run time

    Let's say we have a dictionary. letters ABC...YZ
    We are looking for 'Apple' word.
    It's performant because we keep cutting down our input size.
*/

function binarySearch(numArray, key) {
  // Middle Index
  var middleIdx = Math.floor(numArray.length / 2);

  // Middle element
  var middleElem = numArray[[middleIdx]];

  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
    // numArray.splice(middleIdx, numArray.length) will give us
    // second half of the array
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  }
  // Case: Key is not present
  else return false;
}

numArray = [5, 7, 12, 16, 36, 39, 42, 56, 71];
binarySearch(numArray, 56); // True
