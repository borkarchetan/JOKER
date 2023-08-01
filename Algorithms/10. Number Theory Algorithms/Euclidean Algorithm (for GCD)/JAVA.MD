**Euclidean Algorithm (for GCD):**

The Euclidean algorithm is an efficient method for finding the greatest common divisor (GCD) of two non-negative integers. It is based on the principle that the GCD of two numbers remains the same if we subtract the smaller number from the larger one repeatedly until one of them becomes zero. The GCD is the non-zero number left when one of the numbers becomes zero.

**Java Implementation:**

Let's implement the Euclidean algorithm in Java:

```java
public class EuclideanAlgorithm {

    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    public static void main(String[] args) {
        int a = 84;
        int b = 18;

        int result = gcd(a, b);
        System.out.println("GCD of " + a + " and " + b + " is: " + result);
    }
}
```

**Output:**

```
GCD of 84 and 18 is: 6
```

**Time Complexity:**

The time complexity of the Euclidean algorithm is O(log(min(a, b))), where a and b are the input integers. The algorithm quickly reduces the input numbers by taking the remainder, and the number of iterations required to reach a GCD of 1 (in the worst case) is logarithmic in the smaller of the two input numbers.

**Space Complexity:**

The space complexity of the Euclidean algorithm is O(log(min(a, b))) as it requires space for recursive function calls. The maximum number of function calls on the call stack is logarithmic in the smaller of the two input numbers.

**Summary:**

The Euclidean algorithm is implemented in Java to efficiently find the greatest common divisor (GCD) of two non-negative integers. The output shows the GCD of the input numbers. The time complexity of the algorithm is O(log(min(a, b))), and the space complexity is also O(log(min(a, b))).