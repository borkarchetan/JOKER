**Sieve of Eratosthenes (for prime numbers):**

The Sieve of Eratosthenes is an ancient and efficient algorithm for finding all prime numbers up to a given limit. It works by iteratively marking the multiples of each prime number as composite (not prime), starting from 2, and going up to the square root of the limit. The remaining unmarked numbers are prime.

**Java Implementation:**

Let's implement the Sieve of Eratosthenes in Java:

```java
import java.util.Arrays;

public class SieveOfEratosthenes {

    public static void sieveOfEratosthenes(int limit) {
        boolean[] isPrime = new boolean[limit + 1];
        Arrays.fill(isPrime, true);

        for (int p = 2; p * p <= limit; p++) {
            if (isPrime[p]) {
                for (int i = p * p; i <= limit; i += p) {
                    isPrime[i] = false;
                }
            }
        }

        System.out.print("Prime numbers up to " + limit + ": ");
        for (int i = 2; i <= limit; i++) {
            if (isPrime[i]) {
                System.out.print(i + " ");
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int limit = 30;
        sieveOfEratosthenes(limit);
    }
}
```

**Output:**

```
Prime numbers up to 30: 2 3 5 7 11 13 17 19 23 29
```

**Time Complexity:**

The time complexity of the Sieve of Eratosthenes algorithm is O(n log log n), where n is the limit up to which we want to find the prime numbers. The algorithm iterates through the numbers up to the square root of the limit and eliminates multiples of each prime number. The log log n term comes from the fact that each composite number is marked only once.

**Space Complexity:**

The space complexity of the Sieve of Eratosthenes algorithm is O(n), where n is the limit up to which we want to find the prime numbers. The algorithm uses a boolean array of size (limit + 1) to mark the numbers as prime or composite.

**Summary:**

The Sieve of Eratosthenes is implemented in Java to efficiently find all prime numbers up to a given limit. The output shows the prime numbers up to the specified limit. The time complexity of the algorithm is O(n log log n), and the space complexity is O(n).