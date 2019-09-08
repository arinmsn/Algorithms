/*



    function fibonacci(position){
        // Your code
    }

    Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

    Each number is sum of the previous 2 #s.

    Example:
    fibonacci(4); // returns 3
    fibonacci(9); // returns 34



*/

// Solution
function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

fibonacci(6); // 8
fibonacci(15); // 610

// Time Complexity is poor; O(2^n)
