/*
    Find the longest word in a string
    Return longest character count, not the actual word
*/

str = `Love to faults is always blind, always is to joy inclined. Lawless, winged, 
  and unconfined, and breaks all chains from every mind.`;

// Simple solution
function findLongestWord(str) {
  let words = str.split(" ");
  let maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      //longestWord = words[i];
    }
  }
  // return [maxLength, longestWord];
  return maxLength;
}

findLongestWord(str); // [ 11, 'unconfined,' ]

// Intermediate solution
function findLongestWord(str) {
  return str.split("").reduce((x, y) => {
    return Math.max(x, y.length);
  }, 0);
}

// Advanced solution
function findLongestWord(str) {
  str = str.split(" ");

  if (str.length === 1) {
    return str[0].length;
  }

  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWord(str.join(" "));
  }

  if (str[0].length <= str[1].length) {
    return findLongestWord(str.slice(1, str.length).join(" "));
  }

  return str.length;
}
