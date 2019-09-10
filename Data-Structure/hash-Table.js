/*
    Hash Table
    Performance:
    Runtime
    Lookup:     O(1)
    Insertion:  O(1)

    Applications/Uses: Fast runtime
    Uses: Storage in the form of key values, users of an app, 
    Drawback: data doesn't store references to other pieces of data in the data structure.
    You could place specific properties in your has nodes that would reference other nodes.
    Hash table is table made up of cells (buckets)
    
    {
        key: "Book"
        value: "$24.99"
    }

    If hash table is setu up correctly, we can avoid too many collisions
    
    For small datasets, arrays are usually more efficient.
    Hash tables are typically very fast.
    Hash tables don't order entries in a predictable way.

*/

// Hash table constructor
// size - # of buckets it will have
function HashTable(size){
    this.buckets = Array(size);
    // # of buckets 
    this.numBuckets = this.buckets.length;
}

// Hash Node constructor
function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

var myHT = new HashTable(30);
console.log(myHT);


// Turning letter/character into a number
// console.log('hello world'.charCodeAt(1)); // Outpout: 101
// console.log('hello world'.charCodeAt(4)); // Outpout: 111

// Method to hash our letter/string into a #
HashTable.prototype.hash = function(key){
    var total = 0;
    for (var i = 0; i < key.length; i++){
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    // toatl % 30 = remainder (0-29)
    return bucket;
};


// Insert method
// It will take key and value pair and turn them into a Hash node.
// Then it will place that hash node in the correct bucket.
HashTable.prototype.insert = function(key, value){
    var index = this.hash(key);
    // our bucket is empty at given index
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    } else if (this.buckets[index].key === key) {
        this.buckets[index].value = value;
    }
    // else if there is a node or multiple nodes chained together in the bucket
    else {
        // Bucket is not empty
        var currentNode = this.buckets[index];
        // Current node is present
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                // This is the friend we want to update.
                currentNode.next.value = value;
                // We want to stop the method from running here.
                return;
            }
            // Continue to travel down the chain
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
}

// Get method - It will help us to retrieve info about specific user
HashTable.prototype.get = function(key){
    var index = this.hash(key);
    // If our bucket is empty
    if (!this.buckets[index]) return null;
    // Our bucket is not empty
    else {
        var currentNode = this.buckets[index];
        while (currentNode) {
            // currentNode.value in our case is user's email
            if (currentNode.key === key) return currentNode.value; 
            currentNode = currentNode.next;
        }
        return null;
    }
};

var myHT = new HashTable(30);
console.log(myHT.hash('Becca')); // 12

// Testing the Insert method
myHT.insert('Dean', 'suzan007@gmail.com');
myHT.insert('Johnson', 'johny@gmail.com');
myHT.insert('Dane', 'dansuz@gmail.com')

// Testing refactored Insert method (updating current users' info...)
myHT.insert('Dean', 'de00@gmail.com')
myHT.insert('Johnson', 'j00@gmail.com');
myHT.insert('Dane', 'da00@gmail.com')

console.log(myHT.buckets);

// Testing Get Method 
console.log(myHT.get('Dane')); // da00@gmail - works!

HashTable.prototype.retrieveAll = function(){
    // All nodes will be stored here
    var allNodes = [];
    // Loop through all buckets
    for (var i = 0; i < this.numBuckets; i++){
        // Define first node
        var currentNode = this.buckets[i];
        while(currentNode) {
            allNodes.push(currentNode);
            currentNode = currentNode.next;
        }
    }
    return allNodes;
};

myHT.insert('Jose', 'jose-s@yahoo.com');
myHT.insert('Samione', 'sasmi@yahoo.com')

console.log(myHT.retrieveAll());
