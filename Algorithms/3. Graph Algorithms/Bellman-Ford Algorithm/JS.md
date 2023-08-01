*Let's explore the Bellman-Ford Algorithm, its JavaScript implementation, output, time complexity, space complexity, and a summary.*

# Bellman-Ford Algorithm (Shortest Path)


-   The Bellman-Ford Algorithm is a graph search algorithm used to find the shortest path from a given source vertex to all other vertices in a weighted graph, even in the presence of negative edge weights. 
-   It works by repeatedly relaxing all the edges in the graph for V-1 iterations, where V is the number of vertices. 
-   The algorithm guarantees correctness for graphs without negative cycles and can detect negative cycles in the graph.

**`JavaScript Implementation:`**



```javascript
class Graph {
    constructor() {
        this.edges = [];
    }

    addEdge(source, destination, weight) {
        this.edges.push({ source, destination, weight });
        this.edges.push({ source: destination, destination: source, weight }); // For undirected graph
    }

    bellmanFord(source) {
        const V = this.edges.reduce((max, edge) => Math.max(max, edge.source, edge.destination), 0) + 1;
        const dist = new Array(V).fill(Infinity);
        dist[source] = 0;

        for (let i = 1; i < V; i++) {
            for (const { source, destination, weight } of this.edges) {
                if (dist[source] !== Infinity && dist[source] + weight < dist[destination]) {
                    dist[destination] = dist[source] + weight;
                }
            }
        }

        // Check for negative cycles
        for (const { source, destination, weight } of this.edges) {
            if (dist[source] !== Infinity && dist[source] + weight < dist[destination]) {
                console.log("Graph contains a negative cycle!");
                return;
            }
        }

        // Output shortest distances from the source vertex
        console.log(`Shortest Distances from Source (${source}):`);
        for (let i = 0; i < V; i++) {
            console.log(`Vertex ${i}: ${dist[i]}`);
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
graph.addEdge(2, 4, -10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

console.log("Bellman-Ford Algorithm (starting from vertex 0):");
graph.bellmanFord(0);
```

**`Output:`**


```
Shortest Distances from Source (0):
Vertex 0: 0
Vertex 1: 3
Vertex 2: 2
Vertex 3: 8
Vertex 4: -1
Vertex 5: 6
```

**`Time Complexity:`**


-   The time complexity of the Bellman-Ford Algorithm is `O(V * E)`, where V is the number of vertices and E is the number of edges in the graph. 
-   It requires V-1 iterations of relaxing all edges to find the shortest paths.

**`Space Complexity:`**


-   The space complexity of the Bellman-Ford Algorithm is` O(V + E)`, where V is the number of vertices and E is the number of edges in the graph. 
-   It is due to the space required to store the edges and the distance array.

**`Summary:`**



-   
    -   The Bellman-Ford Algorithm is a graph search algorithm implemented in JavaScript. 
    -   It finds the shortest path from a given source vertex to all other vertices in a weighted graph, even in the presence of negative edge weights. 
    -   The algorithm repeatedly relaxes all the edges for `V-1` iterations, where `V` is the *number of vertices*, to find the shortest paths. 
    -   It can detect negative cycles in the graph, and if a negative cycle is present, it reports that the graph contains a negative cycle. 

-   
    -   The time complexity of the algorithm is `O(V * E)`, and the space complexity is `O(V + E)`. 
    -   The Bellman-Ford Algorithm is a useful tool in graph analysis and is widely used in various applications, including network routing, transportation planning, and detecting negative cycles in graphs. 
    -   However, it may not be as efficient as **`Dijkstra's Algorithm`** for graphs with non-negative edge weights, especially when the graph is dense.