// LinkList constrctor
function LinkedList() {
	// There might not be any nodes yet.
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

// Example
var LL = new LinkedList();
//console.log(LL);
// LinkedList { head: null, tail: null }

var userList = new LinkedList();
var toDoList = new LinkedList();

var node1 = new Node(100, "node2", null); // 1st node, no previous node; thus; 'prev = null'

// Add to head - addToHead is a method
LinkedList.prototype.addToHead = function(value) {
	// Create a new node
	// this.head = current next head
	// previous head = null
	var newNode = new Node(value, this.head, null);

	// Attach it to head list
	// If old head exists
	// 'this' refers to LinkedList constructor
	if (this.head) this.head.prev = newNode;
	// If head LinkedList is empty
	else this.tail = newNode;
	this.head = newNode;
};

// Create LinkedList
var ll = new LinkedList();
ll.addToHead(100);
//console.log(ll);
/*
  
  {
    head: Node { value: 100, next: null, prev: null },
    tail: Node { value: 100, next: null, prev: null } }
  
  */
ll.addToHead(200);
//console.log(ll);
/*
  
  LinkedList {
    head:
     Node {
       value: 200,
       next: Node { value: 100, next: null, prev: [Circular] },
       prev: null },
    tail:
     Node {
       value: 100,
       next: null,
       prev: Node { value: 200, next: [Circular], prev: null } } }
       
  */

ll.addToHead(300);
//ll
/*
  
  LinkedList {
    head:
     Node {
       value: 300,
       next: Node { value: 200, next: [Node], prev: [Circular] },
       prev: null },
    tail:
     Node {
       value: 100,
       next: null,
       prev: Node { value: 200, next: [Circular], prev: [Node] } } }
  
  */
// Add to Tail
LinkedList.prototype.addToTail = function(value) {
	// next node = null; previous node = this.tail (current tail node)
	var newNode = new Node(value, null, this.tail);
	// If LinkedList is not empty
	if (this.tail) this.tail.next = newNode;
	// If LinkedList is empty
	else this.head = newNode;
	this.tail = newNode;
};

var myLL = new LinkedList();
myLL.addToTail(10);
// console.log(myLL);
/*
  LinkedList {
    head: Node { value: 10, next: null, prev: null },
    tail: Node { value: 10, next: null, prev: null } }
  */
myLL.addToTail(20);
myLL.addToTail(30);

//console.log(myLL.tail.prev)
/*
  Node {
    value: 20,
    next: Node { value: 30, next: null, prev: [Circular] },
    prev: Node { value: 10, next: [Circular], prev: null } }
  */

//console.log(myLL.tail.prev.prev)
/*
  Node {
    value: 10,
    next:
     Node {
       value: 20,
       next: Node { value: 30, next: null, prev: [Circular] },
       prev: [Circular] },
    prev: null }
  */
myLL.addToHead(100); // Add value of 100 to the head

// Remove head
LinkedList.prototype.removeHead = function() {
	// If LinkedList is empty
	if (!this.head) return null;

	// If LinkedList is not empty
	var val = this.head.value;
	this.head = this.head.next;
	// If there is a head
	if (this.head) this.head.prev = null;
	else this.tail = null;
	return val;
};

var ll = new LinkedList();
ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);

console.log(ll.removeHead()); // 2000
ll.removeHead();

// Remove Tail
LinkedList.prototype.removeTail = function() {
	// LinkedList is empty. If there is no tail;therefore, list is empty
	if (!this.tail) return null;
	var val = this.tail.value;
	// Change the LinkList's tail pointer to be the node before
	// the tail node we will be removing
	this.tail = this.tail.prev;
	if (this.tail) this.tail.next = null;
	// If list is going to be empty after we remove the original tail
	else this.head = null;
	return val;
};

var ll = new LinkedList();

ll.addToHead("one");
ll.addToHead("two");
ll.addToHead("three");

console.log(ll.removeTail());
