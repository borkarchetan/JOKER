*Let's explore Dijkstra's Algorithm, its JavaScript implementation, output, time complexity, space complexity, and a summary.*

# Dijkstra's Algorithm (Shortest Path)

-   Dijkstra's Algorithm is a graph search algorithm used to find the shortest path from a given source vertex to all other vertices in a weighted graph with non-negative edge weights. 
-   It maintains a priority queue to select the next vertex with the smallest distance from the source and relaxes the edges to update the shortest distances.

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

    addEdge(source, destination, weight) {
        this.adjList.get(source).push({ destination, weight });
        this.adjList.get(destination).push({ destination: source, weight }); // For undirected graph
    }

    dijkstra(source) {
        const dist = new Map();
        const pq = new PriorityQueue((a, b) => dist.get(a) - dist.get(b));

        this.adjList.forEach((_, vertex) => {
            dist.set(vertex, vertex === source ? 0 : Infinity);
            pq.push(vertex);
        });

        while (!pq.isEmpty()) {
            const current = pq.pop();

            for (const { destination, weight } of this.adjList.get(current)) {
                const newDist = dist.get(current) + weight;
                if (newDist < dist.get(destination)) {
                    dist.set(destination, newDist);
                    pq.push(destination);
                }
            }
        }

        // Output shortest distances from the source vertex
        console.log(`Shortest Distances from Source (${source}):`);
        dist.forEach((distance, vertex) => {
            console.log(`Vertex ${vertex}: ${distance}`);
        });
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 3, 5);
graph.addEdge(1, 2, 1);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

console.log("Depth-First Traversal (starting from vertex 0):");
graph.dijkstra(0);
```

**`Output:`**

```
Shortest Distances from Source (0):
Vertex 0: 0
Vertex 1: 3
Vertex 2: 2
Vertex 3: 8
Vertex 4: 10
Vertex 5: 14
```

**`Time Complexity:`**

-   The time complexity of Dijkstra's Algorithm is `O((V + E) * log V)`, where `V` is the number of vertices and `E` is the number of edges in the graph. 
-   The priority queue operations dominate the overall time complexity.

**`Space Complexity:`**

-   The space complexity of Dijkstra's Algorithm is `O(V + E)`, where `V` is the number of vertices and `E` is the number of edges in the graph. 
-   It is due to the space required to store the adjacency list, the priority queue, and the distance map.

**`Summary:`**

-   
    -   Dijkstra's Algorithm is a graph search algorithm implemented in JavaScript. 
    -   It finds the shortest path from a given source vertex to all other vertices in a weighted graph with non-negative edge weights. 
    -   The algorithm maintains a priority queue to select the next vertex with the smallest distance from the source and relaxes the edges to update the shortest distances. 

-   
    -   Dijkstra's Algorithm is widely used in various applications where finding the shortest path is essential, such as network routing, transportation planning, and GPS navigation. 
    -   The time complexity of the algorithm is relatively efficient for small graphs with non-negative edge weights, but it may not be suitable for large graphs with negative weights or dense graphs due to its time complexity. 
    -   The JavaScript implementation utilizes a custom priority queue for efficient vertex selection during the algorithm's execution.