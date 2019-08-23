/* TASK:
    1. Describe what JSON format is.
    2. Delete the data types not permitted in JSON.
    3. Replace placeholder-text with the corresponding data type,
        properly formatted as JSON.

const myJsonObj = {
    myString: [some string],
    myNumber: [some number],
    myNull: [null],
    myBoolean: [false],
    myUndefined: [undefined],
    myArray: [some array],
    myFunction: [some function],
    myObject: [some object]
  };

  */

/*  JSON: JavaScript Object Notation
    Lightweight format for transferring data
    It's used because it is easy for humans to understand.
    It's also easy for computers to parse and generate.
*/

const myJsonObj = {
    myString: [some string],
    myNumber: [some number],
    myNull: [null],
    myBoolean: [false],
    // Not allowed. myUndefined: [undefined],
    myArray: [some array],
    // Not allowed. myFunction: [some function],
    myObject: [some object]
};

// ' single quotes ' are not allowed!
const myJsonObj = {
    "myString": "Hi",
   " myNumber": 987,
    "myNull": null,
    "myBoolean": true,
    // Not allowed. myUndefined: [undefined],
    'myArray': [2, 4, 5, 6, 7, "apple"],
    // Not allowed. myFunction: [some function],
    "myObject": {
        title: "Unknown",
        published: "1882"
    }
};
