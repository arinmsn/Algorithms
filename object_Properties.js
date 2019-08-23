/*

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

a[b] = 200;
a[c] = 400;

console.log(a[b]);

What will be logged out?

*/

/* Solution: 

Output: 400
a[b] = 200; b is an object.

console.log(a);
{ '[Object Object]': 400 }

b is converted to a string, [Object Object]

Only strings can be properties on an object.
*/
