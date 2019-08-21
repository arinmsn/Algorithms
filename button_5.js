function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    button.onclick = function() {
      alert("This is button " + i);
    };
    body.appendChild(button);
  }
}

createButtons();

// When five buttons are shown on screen,
// clicking on each button alerts "Button 6"
// no matter which button is pressed - What's wrong? Fix it.

// Solution 1
// IIFE implementation
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    // IIFE - We pass 'i' as a parameter
    // On each loop, we pass the correct # as i
    // num parameter is preserved
    (function(num) {
      button.onclick = function() {
        alert("This is button " + num);
      };
    })(i);
    body.appendChild(button);
  }
}

createButtons();

// Solution 2
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    addClickFunctionality(button, i);
    body.appendChild(button);
  }
}

function addClickFunctionality(button, num) {
  button.onclick = function() {
    alert("This is button " + num);
  };
}

createButtons();

// Solution 3
// Better alternative - Use 'let' instead of 'var'
function createButtons() {
  for (let i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    button.onclick = function() {
      alert("This is button " + i);
    };
    body.appendChild(button);
  }
}

createButtons();
