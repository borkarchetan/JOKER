

# Bucket Sort:

-   Bucket Sort is a distribution-based sorting algorithm that works by distributing the elements of the input array into a fixed number of buckets, then sorting each bucket individually either using another sorting algorithm or recursively using bucket sort. 
-  It is particularly effective when the input is uniformly distributed over a range.

`Java Implementation:`

```java
import java.util.ArrayList;
import java.util.Collections;

public class BucketSort {
    public static void main(String[] args) {
        double[] arr = {0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51};
        System.out.println("Original array: ");
        printArray(arr);

        bucketSort(arr);

        System.out.println("Sorted array: ");
        printArray(arr);
    }

    public static void bucketSort(double[] arr) {
        int n = arr.length;
        ArrayList<Double>[] buckets = new ArrayList[n];

        // Create empty buckets
        for (int i = 0; i < n; i++) {
            buckets[i] = new ArrayList<>();
        }

        // Add elements to the appropriate bucket
        for (double num : arr) {
            int bucketIndex = (int) (n * num);
            buckets[bucketIndex].add(num);
        }

        // Sort individual buckets
        for (int i = 0; i < n; i++) {
            Collections.sort(buckets[i]);
        }

        // Concatenate sorted buckets back to the original array
        int index = 0;
        for (int i = 0; i < n; i++) {
            for (double num : buckets[i]) {
                arr[index++] = num;
            }
        }
    }

    public static void printArray(double[] arr) {
        for (double value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}
```

`Output:`
```
Original array:
0.42 0.32 0.33 0.52 0.37 0.47 0.51 
Sorted array:
0.32 0.33 0.37 0.42 0.47 0.51 0.52 

```

**`Time Complexity:`**

-   The time complexity of Bucket Sort depends on the number of buckets and the sorting algorithm used for sorting individual buckets. 
-   In the average and best cases, where the elements are uniformly distributed among the buckets and each bucket contains approximately an equal number of elements, the time complexity is `O(n + k)`, where n is the number of elements in the input array, and k is the number of buckets. 
-   However, in the worst case, when all elements are placed into a single bucket, the time complexity can degrade to `O(n^2)` if an inefficient sorting algorithm is used for individual buckets.

**`Space Complexity:`**
-   The space complexity of Bucket Sort is `O(n + k)`, where n is the number of elements in the input array, and k is the number of buckets. 
-   The algorithm uses extra memory to store the buckets, which have sizes proportional to the number of elements.

**`Summary:`**

-  
    - Bucket Sort is a distribution-based sorting algorithm implemented in Java. 
    - It distributes the elements of the input array into a fixed number of buckets and sorts each bucket either using another sorting algorithm or recursively using bucket sort. 
    - Its time complexity is `O(n + k)` in the average and best cases, making it an efficient sorting algorithm for uniformly distributed data. 
    - However, it can degrade to `O(n^2)` in the worst case, so the choice of the number of buckets and the sorting algorithm for individual buckets is crucial.

- 
    - Bucket Sort is particularly effective when the input data is uniformly distributed over a range. 
    - It is commonly used in scenarios where the data is distributed in a predictable manner, such as sorting floating-point numbers in a specific range. 
    - However, it may not perform optimally when the data is heavily skewed or when the range of input values is significantly larger than the number of elements to be sorted. 
    - In such cases, other sorting algorithms like Merge Sort, Quick Sort, or Heap Sort might be more appropriate.