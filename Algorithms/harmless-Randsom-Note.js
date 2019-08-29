/*
If the requirement of the note is met, then function should return true.
The requirement is that all words in the notes can be found in the magazine.

Magazine: 'I will let you on a secret. It is not impossible to hike the tallest
mountain. With that said, it is challenging and requires preparation. Take note that 
some have risked their lives in climbing the tallest mountain. Take it from me
who attempted it three times.'

Note: 'Take the secrete note.'

*/

function harmlessRandsomNote(noteText, magazineText) {
  // Given: no punctuations; all letters are lowercase
  // All words separated
  var noteArr = noteText.split(" ");
  var magazineArr = magazineText.split(" ");
  // Hash table technique
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  // console.log(magazineObj);

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });
  return noteIsPossible;
}

harmlessRandsomNote(
  "across the metro",
  "Meteorologists across the metro are trying to find out how this potential snowfall"
);

/*
Output: 

{ these: 2,
  I: 1,
  repeat: 1,
  are: 1,
  all: 1,
  the: 1,
  words: 1,
  available: 1 }

  Observations:

  Each loop goes through different arrays.
  Linear Time Complexity
  Therefore, O(n) + O(m) 
  O(n) or O(n + m) 

  */
