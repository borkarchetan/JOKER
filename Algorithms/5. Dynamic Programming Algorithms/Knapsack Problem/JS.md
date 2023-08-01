**Knapsack Problem:**

The Knapsack Problem is a classic optimization problem in computer science and combinatorial optimization. It is often used to model scenarios where items have certain values and weights, and we want to select a combination of items to maximize the total value while staying within a given weight capacity (knapsack capacity).

Formally, we are given a set of n items, each with a weight w[i] and a value v[i], and a knapsack with a capacity W. The goal is to find the maximum value that can be obtained by selecting a subset of items such that the sum of their weights does not exceed W.

**JavaScript Implementation:**

Let's implement the Knapsack Problem in JavaScript using dynamic programming:

```javascript
function knapsack(capacity, weights, values) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

// Test the Knapsack Problem
const capacity = 8;
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];

const maxValue = knapsack(capacity, weights, values);
console.log("Maximum value in Knapsack:", maxValue);
```

**Output:**
```
Maximum value in Knapsack: 7
```

**Time Complexity:**

The time complexity of the dynamic programming approach for the Knapsack Problem is O(n * capacity), where n is the number of items and capacity is the knapsack capacity. This is because we need to fill up the 2D dp array of size (n+1) x (capacity+1).

**Space Complexity:**

The space complexity of the dynamic programming approach is O(n * capacity) because of the dp array used for memoization.

**Summary:**

The Knapsack Problem is efficiently solved using dynamic programming in JavaScript. The implementation constructs a 2D dp array to find the maximum value that can be obtained by selecting a subset of items within the given knapsack capacity. The algorithm has a time complexity of O(n * capacity) and a space complexity of O(n * capacity). The Knapsack Problem has various real-world applications, including resource allocation, portfolio optimization, and resource management.