/*

'use strict';
What does using 'strict mode' do to your code?
What are the benefits of using 'strict mode'?

*/

/*
    Solution:
    Main purpose: enforce stricter parsing and error handling in your code
    1. Prevents the use of global variables
    (chance you can overwride global variable that would create difficult-to-find bugs)

    All parameter names must be unique.
    
*/
'use strict';

function myFunc(a, a, b) {
    console.log(a, a, b);
}

myFunc(1, 2, 3);
// If we don't use 'strict' mode,
// we will get output of 2, 2, 3 !


"use strict";

delete Object.prototype;
