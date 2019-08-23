/*
    Describe the bind() f(n) method:

    1. Describe how it works
    2. Explain the parameters it takes
    3. Give an example of how bind() is used
*/

/*

    Solution
    1. The bind() method creates a new function that, when called,
    has its this keyword set to the provided value, with a given
    sequence of arguments preceding any provided when the new function is called.

    The simplest use of bind() is to make a function that,
    no matter how it is called, is called with a particular this value.

    2. function.bind(thisArg[, arg1[, arg2[, ...]]])

    3. Example 
    var module = {
        x: 42,
        getX: function() {
        return this.x;
    }

    var unboundGetX = module.getX;
    console.log(unboundGetX()); // The function gets invoked at the global scope
    // expected output: undefined

    var boundGetX = unboundGetX.bind(module);
    console.log(boundGetX());
    // expected output: 42

    // Another example 
    this.distance = 10000;
        const roadTrip1 = {
            distance: 3000,
            getDistance: function(unit, caption) {      // Parameters
                return this.distance + unit + caption;
            }
    };

    const getTripDistance = roadTrip1.getDistance;
    getTripDistance();  // 10000 ; the global object
    // To fix
    const getTripDistance = roadTrip1.getDistance.bind(roadTrip1);

    const roadTrip2 = {
        distance: 5000
    };

    const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');

    getTripDistance(' in total');

    // Output: 5000km in total
}
*/
