/*
    Memoized Fibonacci

    function fibMemo(index, cache){
        // index: index of # in fibonacci sequence
        // cache: an array used as memory
    }

    index = 5 = 5th number in sequence
    index = 10 = 10th number in sequence
    cache is []

    Runtime for original Fibonacci Algorithm was poor (exponential)

    Memoization:
        - Check to see if # already exists in cache
        - If # is cache, use that #
        - If # is not in cache, calcualte it and put
        it in cache so it can be used multiple times in future
        - New Fibonacci Algorithm Runtime O(n) - linear

*/

// Solution
function fibMemo(index, cache) {
  // index: index of # in fibonacci sequence
  // cache: an array used as memory
  cache = cache || []; // user just needs to specify index
  // Base case - if the number is already in cache
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

fibMemo(8); // 21
fibMemo(15); // 610
fibMemo(45); // 1134903170
fibMemo(60); // 1548008755920
fibMemo(500); // 1.394232245616977e+104
