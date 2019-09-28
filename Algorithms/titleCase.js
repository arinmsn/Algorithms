String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

// Solution 1
function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}

// str = "the woman in white";
str = "and then there were none";
// str = "the name of the rose";
// str = "the big sleep";
console.log(titleCase(str));

// Solution 2
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(va) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

// Solution 3
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

// Solution 4
function titleCase(str) {
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase().split("");
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join("");
  }
  return str.join(" ");
}
