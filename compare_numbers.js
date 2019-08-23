/*

console.log(900.9 === 300.3 * 3); 

True or false?
My solution: false since we are using 'strict' equality sign

Javascript, the way numbers are binary and encoded,
some decimals are not expressed accurately

// 2/3 -> 0.6666666667 

console.log(300.3 * 3); // 900.90000000001

// Some fixes
console.log(Number((300.3 * 3).toFixed(2))); // We will get it in string format 900.90 that's why we used 'Number()'
console.log(Number((300.3 * 3).toPrecision(12))); // 900.900000000
console.log(((300.3 * 10) * 3) / 10); // 900.9

*/
