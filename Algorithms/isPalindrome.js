/*
    The function should return true or false,
    based on wether or not the string or phrase is 
    a palindrome (spells the same backwards or from front).
    Some examples are - "noon" , "Was it a cat I saw?"

    function isPalindrome(string){

        // return true or false
    }

    Do not use RegEx.
    Punctuations such as ',' or " ' " are ignored.

*/

/*
function isPalindrome(string) {
  // First, let's lowercase the letters
  string = string.toLowerCase();

  var charactersArr = string.split("");

  // We will ignore all characters that are not letters
  var validCharacters = "abcdefghijklmnopqrstuvxyz".split("");

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}


*/

// Another solution
function isPalindrome(str) {
  // Front and back pointers
  let front = 0;
  let back = str.length - 1;

  while (back > front) {
    // increment front point
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    // Compare
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }
  // It's a palindrome
  return true;
}

console.log(isPalindrome("Was it a cat I saw")); //true
console.log(isPalindrome("seas")); // false
console.log(isPalindrome("Kayak")); // true
console.log(isPalindrome("Rotator")); // true
console.log(isPalindrome("No lemon, no melon")); // true
console.log(isPalindrome("dady")); // false
