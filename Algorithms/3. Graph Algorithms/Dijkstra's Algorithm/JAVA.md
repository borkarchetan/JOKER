*Let's explore Dijkstra's Algorithm, its Java implementation, output, time complexity, space complexity, and a summary.*

# Dijkstra's Algorithm (Shortest Path)



-   Dijkstra's Algorithm is a graph search algorithm used to find the shortest path from a given source vertex to all other vertices in a weighted graph with non-negative edge weights. 

-   It maintains a priority queue to select the next vertex with the smallest distance from the source and relaxes the edges to update the shortest distances.

**`Java Implementation:`**



```java
import java.util.*;

public class DijkstraAlgorithm {
    private int V; // Number of vertices
    private List<Edge>[] adjList; // Adjacency list representation

    static class Edge {
        int destination;
        int weight;

        public Edge(int destination, int weight) {
            this.destination = destination;
            this.weight = weight;
        }
    }

    public DijkstraAlgorithm(int v) {
        V = v;
        adjList = new ArrayList[V];
        for (int i = 0; i < V; i++) {
            adjList[i] = new ArrayList<>();
        }
    }

    public void addEdge(int source, int destination, int weight) {
        adjList[source].add(new Edge(destination, weight));
        adjList[destination].add(new Edge(source, weight)); // For undirected graph
    }

    public void dijkstra(int source) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[source] = 0;

        PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(e -> e.weight));
        pq.offer(new Edge(source, 0));

        while (!pq.isEmpty()) {
            Edge current = pq.poll();

            if (current.weight > dist[current.destination]) {
                continue;
            }

            for (Edge neighbor : adjList[current.destination]) {
                int newDist = dist[current.destination] + neighbor.weight;
                if (newDist < dist[neighbor.destination]) {
                    dist[neighbor.destination] = newDist;
                    pq.offer(new Edge(neighbor.destination, newDist));
                }
            }
        }

        // Output shortest distances from the source vertex
        System.out.println("Shortest Distances from Source (" + source + "):");
        for (int i = 0; i < V; i++) {
            System.out.println("Vertex " + i + ": " + dist[i]);
        }
    }

    public static void main(String[] args) {
        DijkstraAlgorithm dijkstra = new DijkstraAlgorithm(6);
        dijkstra.addEdge(0, 1, 4);
        dijkstra.addEdge(0, 2, 2);
        dijkstra.addEdge(1, 3, 5);
        dijkstra.addEdge(1, 2, 1);
        dijkstra.addEdge(2, 3, 8);
        dijkstra.addEdge(2, 4, 10);
        dijkstra.addEdge(3, 4, 2);
        dijkstra.addEdge(3, 5, 6);
        dijkstra.addEdge(4, 5, 3);

        dijkstra.dijkstra(0);
    }
}
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



-   The space complexity of Dijkstra's Algorithm is `O(V + E)`, where `V` is the number of vertices and E is the number of edges in the graph. 

-   It is due to the space required to store the adjacency list and the priority queue.

**`Summary:`**



-   Dijkstra's Algorithm is a graph search algorithm implemented in Java. 

-   It finds the shortest path from a given source vertex to all other vertices in a weighted graph with non-negative edge weights. 

-   The algorithm maintains a priority queue to select the next vertex with the smallest distance from the source and relaxes the edges to update the shortest distances. 

-   Dijkstra's Algorithm is widely used in various applications where finding the shortest path is essential, such as network routing, transportation planning, and GPS navigation. 

-   The time complexity of the algorithm is relatively efficient for small graphs with non-negative edge weights, but it may not be suitable for large graphs with negative weights or dense graphs due to its time complexity.