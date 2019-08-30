/*
    Instructions
    ---
    Function should take a string.
    Reverse and return the full string.
    String as a whole should not be reversed.
    Words are in the same order (position).
    reverseWords("I am who"); // Expected output: I ma ohw.
    // Wrong output: ohw ma I. 

    Do not use the array.reverse() method.

    function reverseWords(string){
        // reverse every word in the string
        // return the new string
    }

*/

function reverseWords(string) {
  var wordsArr = string.split(" ");
  var reverseWordsArr = [];

  wordsArr.forEach(word => {
    var reversedWord = [];
    // Start at last character in the string
    for (i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reverseWordsArr.push(reversedWord);
  });
  return reverseWordsArr.join(" ");
}

reverseWords("I love Javascript"); // Output: 'I evol tpircsavaJ'
