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
