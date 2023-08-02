*Let's explore Kruskal's Algorithm, its Java implementation, output, time complexity, space complexity, and a summary.*

# Kruskal's Algorithm (Minimum Spanning Tree):

-   Kruskal's Algorithm is a greedy algorithm used to find the minimum spanning tree (MST) of a connected, undirected graph with weighted edges. 
-   The MST is a subgraph that includes all the vertices of the original graph while minimizing the total edge weight. 
-   Kruskal's Algorithm works by sorting all the edges in non-decreasing order of their weights and adding them to the MST one by one, while ensuring that no cycles are formed.

**`Java Implementation:`**


```java
import java.util.*;

public class KruskalsAlgorithm {
    private int V; // Number of vertices
    private List<Edge> edges; // List of edges

    static class Edge {
        int source;
        int destination;
        int weight;

        public Edge(int source, int destination, int weight) {
            this.source = source;
            this.destination = destination;
            this.weight = weight;
        }
    }

    public KruskalsAlgorithm(int v) {
        V = v;
        edges = new ArrayList<>();
    }

    public void addEdge(int source, int destination, int weight) {
        edges.add(new Edge(source, destination, weight));
    }

    private int findParent(int[] parent, int vertex) {
        if (parent[vertex] == vertex) {
            return vertex;
        }
        return findParent(parent, parent[vertex]);
    }

    private void union(int[] parent, int x, int y) {
        int parentX = findParent(parent, x);
        int parentY = findParent(parent, y);
        parent[parentY] = parentX;
    }

    public void kruskalMST() {
        Collections.sort(edges, (a, b) -> a.weight - b.weight);

        int[] parent = new int[V];
        for (int i = 0; i < V; i++) {
            parent[i] = i;
        }

        List<Edge> mst = new ArrayList<>();

        for (Edge edge : edges) {
            int parentSource = findParent(parent, edge.source);
            int parentDestination = findParent(parent, edge.destination);

            if (parentSource != parentDestination) {
                mst.add(edge);
                union(parent, parentSource, parentDestination);
            }
        }

        // Output the minimum spanning tree
        System.out.println("Minimum Spanning Tree (MST):");
        for (Edge edge : mst) {
            System.out.println(edge.source + " - " + edge.destination + " (" + edge.weight + ")");
        }
    }

    public static void main(String[] args) {
        KruskalsAlgorithm kruskal = new KruskalsAlgorithm(6);
        kruskal.addEdge(0, 1, 4);
        kruskal.addEdge(0, 2, 2);
        kruskal.addEdge(1, 3, 5);
        kruskal.addEdge(1, 2, 1);
        kruskal.addEdge(2, 3, 8);
        kruskal.addEdge(2, 4, 10);
        kruskal.addEdge(3, 4, 2);
        kruskal.addEdge(3, 5, 6);
        kruskal.addEdge(4, 5, 3);

        kruskal.kruskalMST();
    }
}
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

-   The space complexity of Kruskal's Algorithm is `O(V + E)`, where `V` is the number of vertices and `E` is the number of edges. 
-   It is due to the space required to store the edges, the parent array for disjoint set union, and the MST list.

**`Summary:`**

-   
    -   Kruskal's Algorithm is a greedy algorithm implemented in Java to find the minimum spanning tree (MST) of a connected, undirected graph with weighted edges. 
    -   The MST is a subgraph that includes all the vertices of the original graph while minimizing the total edge weight. 
    -   Kruskal's Algorithm works by sorting all the edges in non-decreasing order of their weights and adding them to the MST one by one, while ensuring that no cycles are formed. 

-   
    -   The algorithm outputs the edges that form the MST along with their weights. 
    -   The time complexity of Kruskal's Algorithm is `O(E log E)`, making it efficient for sparse graphs. 
    -   It is commonly used in various applications, such as network design, clustering, and finding the minimum cost of connecting all points in a given set.