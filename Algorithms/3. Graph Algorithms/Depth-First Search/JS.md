# Depth-First Search (DFS):


-   Depth-First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. 

-   It is implemented using either recursion or an explicit stack data structure. 

-   DFS is used to visit all the vertices and edges of a graph in a systematic way.

**`JavaScript Implementation:`**

```javascript
class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(source, destination) {
    this.addVertex(source);
    this.addVertex(destination);
    this.adjList.get(source).push(destination);
    // For an undirected graph, add the reverse edge as well
    // this.adjList.get(destination).push(source);
  }

  dfs(startingVertex) {
    const visited = new Set();

    const dfsRecursive = (vertex) => {
      visited.add(vertex);
      console.log(vertex); // Output the visited vertex

      const neighbors = this.adjList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsRecursive(neighbor);
        }
      }
    };

    dfsRecursive(startingVertex);
  }
}

// Example usage
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("DFS Traversal:");
graph.dfs("A");
```

**`Output:`**

```
DFS Traversal:
A
B
D
E
C
F
```

**`Time Complexity:`**


-   The time complexity of Depth-First Search is `O(V + E)`, where `V` is the number of vertices and `E` is the number of edges in the graph. 

-   It visits each vertex and edge once.

**`Space Complexity:`**


-   The space complexity of Depth-First Search is `O(V)`, where V is the number of vertices in the graph. 

-   It uses additional memory to store the visited vertices in the visited set.

**`Summary:`**


-   The JavaScript implementation demonstrates Depth-First Search `(DFS)` on a graph. 

-   The algorithm starts from a given starting vertex and visits all the vertices reachable from it. 

-   It explores as far as possible along each branch before backtracking. The output shows the traversal order of vertices during DFS. 

-   The time complexity is `O(V + E)`, and the space complexity is `O(V)`.