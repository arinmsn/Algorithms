/*
    1. What does list2 contain? What is the output?

    const list1 = [1, 2, 3, 4, 5];
    const list2 = list1;
    list1.push(6, 7, 8);

    console.log(list2);

    // Passing data by reference vs. passing data by value

    // Passing data by value
    const myNum = 10;
    const myString = 'Hello, world.';
    const mySring2 = myString;  

    If data type being passed is object (such as array),
    data will be passed by reference.
    list2 and list1 are referencing the same exact underlying data (array)

    2. What would we get if we said list1 = [10, 20, 30];
    list2 would reference to old array [1, 2, 3, 4, 5]
    list 2 is not being set to another new array that looks like array for list1!
    Changing value of a variable never changes underlying object.
    It simply points the variable to a new object (array, string, etc.)

    How can we set list2 equal to an array that has same values as list1 w/o
    referencing the same underlying object (array)?

    Solution: We need to make copy of list1 and assign it to list2.
    Option 1: slice() method
    Option 2: concat method
    Option 3: forLoop

*/

// Option 1
const list1 = [1, 2, 3, 4];
const list2 = list1.slice();
list1.push(6, 7, 8, 9);
console.log(`List1:  ${list1}`);
console.log(`List2:  ${list2}`);

// Option 2
const list1 = [1, 2, 3, 4];
const list2 = list1.concat([]);
list1.push(6, 7, 8, 9);
console.log(`List1:  ${list1}`);
console.log(`List2:  ${list2}`);

// Option 3

const list2 = [];
// use for loop... (Longer)
