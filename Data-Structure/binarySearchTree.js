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
// var bst = new BST(50); 

BST.prototype.insert = function(value){
    // Is value < or > than root node?
    if (value <= this.value) {
        // if there is no left child
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    } else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        
        // if there is a right child
        else this.right.insert(value);
    }
};

var bst = new BST(50); 

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.right.left.left); // should be 59
console.log(bst.left.right.left); // should be 35
console.log(bst.right.right); // should be 100

/*
    Contains Method
*/

BST.prototype.contains = function(value){
    if (value === this.value) return true;
    else if (value < this.value) {
        // if there is no left child node
        if (!this.left) return false;
        else return this.left.contains(value);
    } else if (value > this.value) {
        // if there is no right child node
        if (!this.right) return false;
        else return this.right.contains(value);
    }
};

// Testing the 'Contains' method
console.log(bst.contains(50)); // Should get true
console.log(bst.contains(105)); // true
console.log(bst.contains(1005)); // false
console.log(bst.contains(82)); // false

// Depth First Traversal (in-order) From least to greatest
BST.prototype.depthFirstTraversal = function(iteratorFunc) {
    //iteratorFunc(this.left.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc);
    iteratorFunc(this.value); // Parent node
    if (this.right) this.right.depthFirstTraversal(iteratorFunc);
    //iteratorFunc(this.right.value);
};

bst.depthFirstTraversal(log);

function log(value){
    console.log(value);
}

// Depth First Traversal (any order)
// Refactoring
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    //iteratorFunc(this.left.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value); // Parent node
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    //iteratorFunc(this.right.value);
};
// We should get same results as above.
bst.depthFirstTraversal(log, 'in-order');

function log(value){
    console.log('--- In-order ---', value);
}


// 'Pre-order' - We will go to Parent node first, next the left branch, 
// then we visit the right branch -- Useful when we are making copy.
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this.value); 
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value); // We skip it.
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
};

bst.depthFirstTraversal(log, 'pre-order');

function log(value){
    console.log('--- Pre-Order ---');
    console.log(value);
}

// Post-order
// Left children, next Right children, then Parent
// Uses: To delete nodes. It works from lowest level.
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this.value); // Not run
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order); // Left children first
    if (order === 'in-order') iteratorFunc(this.value); // Not run
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order); // Right children second
    if (order === 'post-order') iteratorFunc(this.value); // Last is parent
};
// We should get following output
// 10, 20, 35, 45, 30, 59, 60, 85, 105, 100, 70, 50

/*
    Breath First Traversal
    It will go over each node level by level, starting from the very top
    Horizontal motion
    Uses: Defining hierachy (employees, pinpointing executives)
*/

BST.prototype.breathFirstTraversal = function(iteratorFunc) {
    // Define a queue (FIFO list)
    var queue = [this];
    while (queue.length){
        var treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
    }
}

/*
    In our case, it will start with var queue = [50]
    Next iteratorFun(50), iterator function runs 

    We can then move on to the next nodes var queue = [ 30, 70]
    We follow same procedure with these nodes.
    iteratorFun(30), then iteratorFun(70)
*/

// Testing 
// List the tree
function log(node){
    console.log(node.value);
}
bst.breathFirstTraversal(log);

BST.prototype.getMinVal = function(){
    if (this.left) return this.left.getMinVal();
    else return this.value; // Furthest left child node
};

BST.prototype.getMaxVal = function() {
    if (this.right) return this.right.getMaxVal();
    else return this.value;
};

function log(node){
    console.log(node.value)
}

console.log('MIN: ', bst.getMinVal());  // MIN: 10
console.log('MAX: ', bst.getMaxVal());  // MAX: 105

// Peroformance: O (log n) -- faster than Linked List
// Binary Search Tree needs to be balanced to be optimized. (most performant)
// Uses: Storing data, searching and deleting data, phone book, dictionary
//      Sotring users' IDs