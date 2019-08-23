/*

const data1 = 'Jordan Smith';

const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});

console.log(data2);

What's going on the code?
What is the output?


*/

/*
Solution:

Output: [ 'S', 'm', 'i', 't', 'h' ]

Array.prototype.filter ...
[].filter ...


You can only use 'read-only' methods such as filter, forEach, map, some, every, etc.
You cannot use push, pop, splice, shift, reverse, etc.
*/
