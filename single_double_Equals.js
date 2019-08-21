/*
    What is the difference between == and === ?
*/

/*
    == 
    Tests for abstract equality
    does not test for data type

    ===
    tests for stric equality
    tests for data type

    "under the hood" when '==' is used for comparison

    Comparing number & string 
    String is converted to a #. Then comparison is made.

    Comparing boolean & non-boolean
    Non-boolean is converted to a boolean then a comparison made.

    Comparing object & primitive data-type
    Object is converted to primitive data-type and then comparison is made.
*/

console.log(2 == "2"); // true

console.log(2 === "2"); // false
