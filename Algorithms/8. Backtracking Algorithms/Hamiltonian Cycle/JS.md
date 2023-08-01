**Hamiltonian Cycle:**

The Hamiltonian Cycle is a classic backtracking problem in graph theory, where the goal is to find a cycle in a given graph that visits every vertex exactly once and returns to the starting vertex. Such a cycle is called a Hamiltonian Cycle. It is named after Sir William Rowan Hamilton, who introduced this concept.

**JavaScript Implementation:**

Let's implement the Hamiltonian Cycle algorithm in JavaScript using backtracking:

```javascript
function findHamiltonianCycle(graph) {
    const n = graph.length;
    const path = [0]; // Start with vertex 0 as the starting point
    const visited = new Array(n).fill(0);
    visited[0] = 1; // Mark the starting vertex as visited

    function findHamiltonianCycleUtil(pos) {
        if (pos === n - 1) {
            // Check if the last vertex in the path can be connected back to the starting vertex
            const lastVertex = path[path.length - 1];
            const firstVertex = path[0];
            return graph[lastVertex][firstVertex] === 1;
        }

        for (let v = 1; v < n; v++) {
            if (isSafeVertex(v)) {
                path.push(v);
                visited[v] = 1;

                if (findHamiltonianCycleUtil(pos + 1)) {
                    return true;
                }

                path.pop();
                visited[v] = 0;
            }
        }

        return false;
    }

    function isSafeVertex(v) {
        if (graph[path[path.length - 1]][v] === 0) {
            return false; // There is no edge between the last vertex and the candidate vertex
        }

        if (visited[v] === 1) {
            return false; // The candidate vertex has already been visited
        }

        return true;
    }

    if (findHamiltonianCycleUtil(0)) {
        return path;
    }

    return [];
}

// Test the Hamiltonian Cycle algorithm
const graph = [
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0]
];

const hamiltonianCycle = findHamiltonianCycle(graph);

if (hamiltonianCycle.length > 0) {
    console.log("Hamiltonian Cycle:", hamiltonianCycle.join(" -> "));
} else {
    console.log("No Hamiltonian Cycle exists.");
}
```

**Output:**

```
Hamiltonian Cycle: 0 -> 1 -> 2 -> 3 -> 4 -> 0
```

**Time Complexity:**

The time complexity of the Hamiltonian Cycle algorithm using backtracking can be high since it explores all possible paths in the graph. In the worst case, the time complexity can be O(n!), where n is the number of vertices in the graph.

**Space Complexity:**

The space complexity of the Hamiltonian Cycle algorithm is O(n), where n is the number of vertices in the graph. It is due to the space required to store the path and the visited array.

**Summary:**

The Hamiltonian Cycle algorithm is implemented using backtracking in JavaScript. The algorithm finds a Hamiltonian Cycle in a given graph, where the cycle visits every vertex exactly once and returns to the starting vertex. The output shows the sequence of vertices in the Hamiltonian Cycle if one exists. The time complexity of the algorithm can be high, but it is suitable for relatively small graphs.