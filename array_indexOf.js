/*

console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' }));
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4]].indexOf([2]));


My solution:

// 2
// 1
// 4
// 2


Solution:

2
-1  // Two objects are never the same; it doesn't exist in the array
4
-1  // Two arrays (which are objects) are not the same

IF we were to say const myArray = [5];
const anotherArray = mayArray;

console.log([[1], [2], [3], [4], myArray].indexOf([myArray]));  //4
console.log([[1], [2], [3], [4], anotherArray].indexOf([anotherArray]));  //4

*/
