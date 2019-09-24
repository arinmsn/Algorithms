/*
    Reverse a string
    Example: "Bye" should return eyB
*/

/*
// Solution 1
function reverseString(str) {
  str = str
    .split("")
    .reverse("")
    .join("");
  return str;
}
*/

//console.log(reverseString("hello")); // olleh
//console.log(reverseString("Bye Bye")); // eyB eyB
//console.log(reverseString("Greetings from Living Spaces")); // secapS gniviL morf sgniteerG

// Solution 2
function reverseString(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("Bye Bye")); // eyB eyB
console.log(reverseString("Greetings from Living Spaces"));
