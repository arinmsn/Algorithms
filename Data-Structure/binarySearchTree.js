/*  Binary Search Tree (BST)
Collection of nodes that are connected in a certain way
Each node will contain up to 2 nodes (to right and left)

        50
       /  \
     30  100
        /   \
       75   110

Depth First Traversal - We start at top and follow each node and continue downward
Breadth First Traversal - We start at top but we will go across each level before moving downward

By nature, BSTs are recurisve structures
*/

/* Recursion - when a f(n) calls itself

function func(){
    if (base case){
        return something;
    } else recursive case {
        func()
    }
}

*/

// Example
// Factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24
// 2! = 2 * 1 = 2

function factorial(num){
    // Base Case
    if (num === 1){
        return num;
    // Recursive Case
    } else {
        return num * factorial(num - 1);
    }
}

// Call Stack
// It represents what order our F(n) are called in and 
// what variables are called with

factorial(4);
/* 
We use recursion to get to the base case. Then we unwind.
num = 1     factorial(1)    base case
num = 2     return 2 * factorial(1)
num = 3     return 3 * factorial(2)
num = 4     return 4 * factorial(3)
*/

// Insert method
function BST(value){
    this.value = value; 
    this.left = null; 
    this.right = null;
}

// Just crated one node with no children
var bst = new BST(50); 

BST.prototype.insert = function(value){
    // Is value < or > than root node?
    if (value <= this.value) {
        // if there is no left child
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    } else if (value > this.value) {

    }
};