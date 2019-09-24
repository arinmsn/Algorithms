// Solution 1
/*
function factorialize(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}
*/

// Solution 2
/*
function factorialize(num) {
  if (num === 0) return 1;
  return num * factorialize(num - 1);
}
*/

// Solution 3

function factorialize(num) {
  for (var a = 1; num >= 1; num--) {
    a *= num;
  }
  return a;
}

console.log(factorialize(0));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(50));
