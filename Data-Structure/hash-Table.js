/*
    Hash Table

    Runtime
    Lookup:     O(1)
    Insertion:  O(1)

    Applications/Uses: Fast runtime
    Uses: Storage in the form of key values
    Hash table is table made up of cells (buckets)
    {
        key: "Book"
        value: "$24.99"
    }

    If hash table is setu up correctly, we can avoid too many collisions

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

// Method to hash our letter into a #
HashTable.prototype.hash = function(key){
    var total = 0;
    for (var i = 0; i < key.length; i++){
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    // toatl % 30 = remainder (0-29)
    return bucket;
};
var myHT = new HashTable(30);
console.log(myHT.hash('Becca')); // 12

