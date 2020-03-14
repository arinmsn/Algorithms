// Graphs: Breath-first search

function bfs(graph, root) {
  var nodesLen = {};

  for (var i = 0; i < graph.length; i++) {
    // infinity means a node is not reachable
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;

  var queue = [root];
  var current;

  while (queue.length != 0) {
    current = queue.shift();

    var curConnected = graph[current];
    var neighborIdx = [];
    var idx = curConnected.indexOf(1);
    while (idx != -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (var j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

/*
 Node 1 and 2 connect
 Node 0 connects to 3
 Node 2 connects to 1 and 0
 Node 4 directs to node 1
*/

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1));
