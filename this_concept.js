// What is "this" keyword and how is it used in JS?

/*
    Solution: 'this' refers to whatever object it is direclty inside of ("context of")
    console.log(this) // will refer to Window
    It's used within objects.
*/
var house = {
  price: 500000,
  squareFeet: 2000,
  owner: "Jimmy",
  getPricePerSquareFoot: function() {
    return this.price / this.squareFeet;
  }
};

console.log(house.price); // 500000
console.log(house.getPricePerSquareFoot()); // 250
