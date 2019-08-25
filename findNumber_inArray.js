/*
  Does the number exist in the array?
  Write a function that would return 'YES' or 'NO.'
*/

function findNumber(arr, k) {
	for (var i = 0; i <= arr.length; i++) {
		if (arr[i] === k) {
			return "YES";
		}
	}

	return "NO";
}

findNumber([1, 2, 3, 4, 5, 6], 12);
