/*
    Find the longest word in a string
    Return longest character count, not the actual word
*/

str = `Love to faults is always blind, always is to joy inclined. Lawless, winged, 
  and unconfined, and breaks all chains from every mind.`;

function findLongestWord(str) {
  let words = str.split(" ");
  let maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }
  return [maxLength, longestWord];
}

findLongestWord(str); // [ 11, 'unconfined,' ]
