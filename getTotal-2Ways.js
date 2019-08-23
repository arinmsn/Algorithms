/*
    function getTotal() {

    }

    Using either this should return same result:
    getTotal(10, 20);
    getTotal(10)(20);
*/

//  Solution
function getTotal() {
	var args = Array.prototype.slice.call(arguments);
	// Arguments is similiar to array
	//.call is used to bind Array.prototypce.slice to arguments
	if (args.length === 2) {
		return args[0] + args[1];
	} else if (args.length === 1) {
		return function(num2) {
			return args[0] + num2;
		};
	}
}

console.log(getTotal(10, 20));
console.log(getTotal(10)(20));
