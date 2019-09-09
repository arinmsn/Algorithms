/*
    function bubbleSort(array){
        // retun an array, sorted from smallest to largest #
    }
*/

function bubbleSort(array) {
	// Dictating how many times we will loop over array
	for (var i = array.length; i > 0; i--) {
		// Go over whole array and stop one element
		// shorter than previous loop
		for (var j = 0; j < i; j++) {
			// Temporary variable
			if (array[j] > array[j + 1]) {
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

//array = [1, 3, 5, 6, 2, 4]; Output: [ 1, 2, 3, 4, 5, 6 ]
array1 = [105, 50, 35, 30, 40, 10, 15, 3, 4];
bubbleSort(array1); // [ 3, 4, 10, 15, 30, 35, 40, 50, 105 ]
