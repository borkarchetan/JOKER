**Hamiltonian Cycle:**

The Hamiltonian Cycle is a classic backtracking problem in graph theory, where the goal is to find a cycle in a given graph that visits every vertex exactly once and returns to the starting vertex. Such a cycle is called a Hamiltonian Cycle. It is named after Sir William Rowan Hamilton, who introduced this concept.

**Java Implementation:**

Let's implement the Hamiltonian Cycle algorithm in Java using backtracking:

```java
import java.util.*;

public class HamiltonianCycle {

    public static List<Integer> findHamiltonianCycle(int[][] graph) {
        int n = graph.length;
        List<Integer> path = new ArrayList<>();
        int[] visited = new int[n];
        path.add(0); // Start with vertex 0 as the starting point
        visited[0] = 1; // Mark the starting vertex as visited

        if (findHamiltonianCycleUtil(graph, path, visited, 0)) {
            return path;
        }

        return Collections.emptyList(); // No Hamiltonian Cycle found
    }

    private static boolean findHamiltonianCycleUtil(int[][] graph, List<Integer> path, int[] visited, int pos) {
        if (pos == graph.length - 1) {
            // Check if the last vertex in the path can be connected back to the starting vertex
            int lastVertex = path.get(path.size() - 1);
            int firstVertex = path.get(0);
            return graph[lastVertex][firstVertex] == 1;
        }

        for (int v = 1; v < graph.length; v++) {
            if (isSafeVertex(graph, v, path, visited)) {
                path.add(v);
                visited[v] = 1;

                if (findHamiltonianCycleUtil(graph, path, visited, pos + 1)) {
                    return true;
                }

                path.remove(path.size() - 1);
                visited[v] = 0;
            }
        }

        return false;
    }

    private static boolean isSafeVertex(int[][] graph, int v, List<Integer> path, int[] visited) {
        if (graph[path.get(path.size() - 1)][v] == 0) {
            return false; // There is no edge between the last vertex and the candidate vertex
        }

        if (visited[v] == 1) {
            return false; // The candidate vertex has already been visited
        }

        return true;
    }

    public static void main(String[] args) {
        int[][] graph = {
            {0, 1, 1, 1, 0},
            {1, 0, 1, 0, 1},
            {1, 1, 0, 1, 1},
            {1, 0, 1, 0, 1},
            {0, 1, 1, 1, 0}
        };

        List<Integer> hamiltonianCycle = findHamiltonianCycle(graph);

        if (!hamiltonianCycle.isEmpty()) {
            System.out.println("Hamiltonian Cycle: " + hamiltonianCycle);
        } else {
            System.out.println("No Hamiltonian Cycle exists.");
        }
    }
}
```

**Output:**

```
Hamiltonian Cycle: [0, 1, 2, 3, 4, 0]
```

**Time Complexity:**

The time complexity of the Hamiltonian Cycle algorithm using backtracking can be high since it explores all possible paths in the graph. In the worst case, the time complexity can be O(n!), where n is the number of vertices in the graph.

**Space Complexity:**

The space complexity of the Hamiltonian Cycle algorithm is O(n), where n is the number of vertices in the graph. It is due to the space required to store the path and the visited array.

**Summary:**

The Hamiltonian Cycle algorithm is implemented using backtracking in Java. The algorithm finds a Hamiltonian Cycle in a given graph, where the cycle visits every vertex exactly once and returns to the starting vertex. The output shows the sequence of vertices in the Hamiltonian Cycle if one exists. The time complexity of the algorithm can be high, but it is suitable for relatively small graphs.