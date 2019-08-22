/*
    Take a look at the following.
    What is the output?
*/

var myBike = {
  color: "red",
  logColor: function() {
    var self = this;
    console.log("In logColor - this.color: " + this.color);
    console.log("In logColor - self.color: " + self.color);
    (function() {
      console.log("In IIFE - this.color: " + this.color);
      console.log("In IIFE - self.color: " + self.color);
    })();
  }
};

myBike.logColor();

/*
    Solution
    Output:

    In logColor - this.color: red
    In logColor - self.color: red

    In IIFE - this.color: undefined
    In IIFE - self.color: red

    var self = this; // 'this' refers to myBike object

    We are inside a new function.
    (function() {
      console.log("In IIFE - this.color: " + this.color);   // 'this' has lot reference! (refers to global object)
      console.log("In IIFE - self.color: " + self.color);   // Common technique 
    })();
*/

// Another Example of Scope

// Global (name)
// Local (name)
// Local
// Local

//let name = 'Andrew';
if (true) {
  //let name = 'Mike'
  if (true) {
    name = "Jen"; // Big problem - Creating a global variable "Leaked global"
    let name = "Jen"; // Better alternative
    console.log(name);
  }
}

if (true) {
  console.log(name);
}

// Output: Jen
// Output: Jen

// With let, we will get RefereneError: name is not defined.
