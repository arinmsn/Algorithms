/*
    function caesarCipher(str, num) {
        // Your code goes here.
    }

    If we pass a number, letters in the string we have included shift
    2 places.

    e.g. caesarCipher('apple', 2); // Output: crrng

*/

function caesarCipher(str, num) {
  // In case user enters a high or negative 'num'
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwyz".split("");
  var newString = "";

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    // If letter is a space character
    if (currentLetter === " ") {
      newString += currentLetter;
      continue; // Skip and move to next itereration
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    // What if the letter was uppercase.
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
}

caesarCipher("apple", 2); // Output: 'crrng'
caesarCipher("orange", -20); // Output: 'uygtmk'
caesarCipher("Rust AND", -1000); // Output: 'Figh OBR'
