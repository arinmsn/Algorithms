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