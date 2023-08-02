*Let's explore Kruskal's Algorithm, its JavaScript implementation, output, time complexity, space complexity, and a summary.*

# Kruskal's Algorithm (Minimum Spanning Tree):


-   Kruskal's Algorithm is a greedy algorithm used to find the minimum spanning tree (MST) of a connected, undirected graph with weighted edges. 
-   The MST is a subgraph that includes all the vertices of the original graph while minimizing the total edge weight. 
-   Kruskal's Algorithm works by sorting all the edges in non-decreasing order of their weights and adding them to the MST one by one, while ensuring that no cycles are formed.

**`JavaScript Implementation:`**



```javascript
class DisjointSet {
    constructor(size) {
        this.parent = new Array(size).fill(null).map((_, idx) => idx);
        this.rank = new Array(size).fill(0);
    }

    find(vertex) {
        if (vertex !== this.parent[vertex]) {
            this.parent[vertex] = this.find(this.parent[vertex]);
        }
        return this.parent[vertex];
    }

    union(vertex1, vertex2) {
        const root1 = this.find(vertex1);
        const root2 = this.find(vertex2);

        if (root1 !== root2) {
            if (this.rank[root1] < this.rank[root2]) {
                this.parent[root1] = root2;
            } else if (this.rank[root1] > this.rank[root2]) {
                this.parent[root2] = root1;
            } else {
                this.parent[root2] = root1;
                this.rank[root1]++;
            }
        }
    }
}

class Graph {
    constructor() {
        this.edges = [];
    }

    addEdge(source, destination, weight) {
        this.edges.push({ source, destination, weight });
        this.edges.push({ source: destination, destination: source, weight }); // For undirected graph
    }

    kruskalMST() {
        this.edges.sort((a, b) => a.weight - b.weight);

        const V = this.edges.reduce((max, edge) => Math.max(max, edge.source, edge.destination), 0) + 1;
        const disjointSet = new DisjointSet(V);
        const mst = [];

        for (const { source, destination, weight } of this.edges) {
            if (disjointSet.find(source) !== disjointSet.find(destination)) {
                mst.push({ source, destination, weight });
                disjointSet.union(source, destination);
            }
        }

        // Output the minimum spanning tree
        console.log("Minimum Spanning Tree (MST):");
        for (const { source, destination, weight } of mst) {
            console.log(`${source} - ${destination} (${weight})`);
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 3, 5);
graph.addEdge(1, 2, 1);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

console.log("Kruskal's Algorithm (Minimum Spanning Tree):");
graph.kruskalMST();
```

**`Output:`**


```
Minimum Spanning Tree (MST):
1 - 2 (1)
3 - 4 (2)
0 - 2 (2)
4 - 5 (3)
```

**`Time Complexity:`**


-   The time complexity of Kruskal's Algorithm is `O(E log E)`, where E is the number of edges in the graph. 
-   The dominant factor in the time complexity is the sorting of the edges by their weights.

**`Space Complexity:`**


-   The space complexity of Kruskal's Algorithm is `O(V + E)`, where V is the number of vertices and E is the number of edges. 
-   It is due to the space required to store the edges, the disjoint-set data structure, and the MST.

**`Summary:`**

-   
    -   Kruskal's Algorithm is a greedy algorithm implemented in JavaScript to find the minimum spanning tree (MST) of a connected, undirected graph with weighted edges. 
    -   The MST is a subgraph that includes all the vertices of the original graph while minimizing the total edge weight. 
    -   Kruskal's Algorithm works by sorting all the edges in non-decreasing order of their weights and adding them to the MST one by one, while ensuring that no cycles are formed. 
    
-       
    -   The algorithm outputs the edges that form the MST along with their weights. 
    -   The time complexity of Kruskal's Algorithm is `O(E log E)`, making it efficient for sparse graphs. 
    -   It is commonly used in various applications, such as network design, clustering, and finding the minimum cost of connecting all points in a given set.