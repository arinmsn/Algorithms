function getProduct(num1, num2) {
  return num1 * num2;
}
getProduct(10, 20);

// Turn the above function into a curry function

// Solution

function getProduct1(num1) {
  return function(num2) {
    return num1 * num2;
  };
}
getProduct1(10)(20);

// Another example
function getTravelTime(distance, speed) {
  return distance / speed;
}
getTravelTime(600, 50);

// What if we travelled same distance, but at different speeds?
// Notice we are repeating 400km or 400miles
getTravelTime(400, 50);
getTravelTime(400, 60);
getTravelTime(400, 80);

// Let's curry the function
function getTravelTime(distance) {
  return function(speed) {
    return distance / speed;
  };
}

const travelTimeLaToNv = getTravelTime(300); // miles
console.log(travelTimeLaToNv(50)); // miles/hour
