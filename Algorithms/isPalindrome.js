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

function isPalindrome(string) {
  // First, let's lowercase the letters
  string = string.toLowerCase();

  var charactersArr = string.split("");

  // We will ignore all characters that are not letters
  var validCharacters = "abcdefghijklmnopqrstuvxyz".split("");

  var lettersArr = [];
  charactersArr.forEach(chat => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}

isPalindrome("Was it a cat I saw");
