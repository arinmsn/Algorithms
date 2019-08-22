/*
    Describe the call() and apply() methods.
    
    1) How do they function?
    2) What arguments do they take?
    3) How are they different

*/

/*
    Soultion:

    The call() method calls a function with a given this value and
    arguments provided individually. The call() allows for a function/method
    belonging to one object to be assigned and called for a different object.

    call() provides a new value of this to the function/method. With call, you can write a method
    once and then inherit it in another object, without having to rewrite the method for the new object.


    apply()
    Note: When the first argument is undefined or null a similar outcome can be achieved using the array spread syntax.

    2) Arguments
    call()
    function.call(thisArg, arg1, arg2, ...)

    apply()
    function.apply(thisArg, [argsArray])

    3) Difference
    the fundamental difference is that call() accepts an argument list,
    while apply() accepts a single array of arguments.

    With apply, you can also use an array literal, for example, func.apply(this, ['eat', 'bananas']),
    or an Array object, for example, func.apply(this, new Array('eat', 'bananas'))

*/

const car1 = {
	brand: "Porsche",
	getCarDescription: function(cost, year, color) {
		console.log(
			`This car is a ${
				this.brand
			}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`
		);
	}
};

const car2 = {
	brand: "Lamborghini"
};

const car3 = {
	brand: "Ford"
};

// Nomrally this is how we would call the getCarDescription
car1.getCarDescription(80000, 2010, "blue");
car1.getCarDescription.call(car2, 200000, 2013, "yellow");
car1.getCarDescription.apply(car3, [35000, 2012, "black"]);
