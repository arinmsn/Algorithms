/*

    Function sieveOfEratos(num){
        // return all prime numbers up to 
        // 'num' in an array
    }

    For Example:

    sieveOfEratos(20);
    // [2, 3, 5, 7, 11, 13, 17, 19]







    Solution:

    0 and 1, we can mark as "False" (not Prime).
    Next, we will go over each number and we will
    mark each muliple of a number as false.

    So, we start as 2. All multiples as 2 (4, 6, 8, 10, 12, 14, 16, 20) as false.
    Then we move on to 3. Multiples of 3 will be marked as False.
    Then move on 4.

    Optimization: We can stop looping through at the square root of "num"
    Because all non-prime #s after the root of n will be marked as false by
    the time we get to the root of n.

*/

function sieveOfEratosthenes(n) {
	var primes = [];
	for (var i = 0; i <= n; i++) {
		primes[i] = true;
	}

	primes[0] = false;
	primes[1] = false;

	for (var i = 2; i <= Math.sqrt(n); i++) {
		for (j = 2; i * j <= n; j++) {
			primes[i * j] = false;
		}
	}

	var result = [];
	for (var i = 0; i < primes.length; i++) {
		if (primes[i]) result.push(i);
	}

	return result;
}

//sieveOfEratosthenes(10); // [ 2, 3, 5, 7 ]
sieveOfEratosthenes(50); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
