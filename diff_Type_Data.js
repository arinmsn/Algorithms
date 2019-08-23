/*
    What is logged out for each console.log statement?
*/

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);

// Solution
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object

// How can we tell if array is an array? It shows as object

console.log(Array.isArray([])); // true

console.log([] instanceof Array); // true
