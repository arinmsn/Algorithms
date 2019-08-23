/*
    Describe 3 ways of creating an object in Javascript.
*/

// Method #1
// Object Literal Syntax (Preferred over #2)

const myBook = {
	pages: 540,
	author: "Stephen King"
};

// Method #2 - New keyword and Object constructor

const student = new Object();

student.grade = 12;
student.gpa = 4.0;
student.classes = ["Philosophy", "Math", "Computer Science"];
student.getClasses = function() {
	return this.classes;
};

// Method #3 - Constructor function
function Car(brand, color, year) {
	this.brand = brand;
	this.color = color;
	this.year = year;
}

Car.prototype.getYear = function() {
	return this.year;
};

const simonCar = new Car("Yellow", "Porsche", 1999);
console.log(simonCar);
console.log(simonCar.getYear());
