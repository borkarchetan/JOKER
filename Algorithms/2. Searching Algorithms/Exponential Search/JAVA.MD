*Let's explore the Exponential Search algorithm, its Java implementation, output, time complexity, space complexity, and a summary.*

# Exponential Search


-   Exponential Search is a search algorithm used to find a target element in a sorted array. 
-   It works by repeatedly doubling the search range until the target element's value is greater than the last element of the current range. 
-   Then, it performs a binary search within that range to find the target element.

**`Java Implementation:`**

```java
public class ExponentialSearch {
    public static void main(String[] args) {
        int[] arr = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
        int target = 14;

        int index = exponentialSearch(arr, target);
        if (index != -1) {
            System.out.println("Element " + target + " found at index " + index);
        } else {
            System.out.println("Element " + target + " not found in the array.");
        }
    }

    public static int exponentialSearch(int[] arr, int target) {
        int n = arr.length;
        if (arr[0] == target) {
            return 0;
        }

        int i = 1;
        while (i < n && arr[i] <= target) {
            i *= 2;
        }

        return binarySearch(arr, target, i / 2, Math.min(i, n - 1));
    }

    public static int binarySearch(int[] arr, int target, int left, int right) {
        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
```

Output:
```
Element 14 found at index 6
```

**`Time Complexity:`**


-   The time complexity of Exponential Search is `O(log n)`, where n is the number of elements in the sorted array. 
-   The algorithm performs a doubling search interval, followed by a binary search within that interval. 
-   As a result, it has a logarithmic time complexity.


**`Space Complexity:`**


-   The space complexity of Exponential Search is `O(1)`, which means the algorithm uses constant space regardless of the size of the input array. 
-   It does not require any additional memory that scales with the input size.


**`Summary:`**


- 
    -   Exponential Search is a search algorithm implemented in Java. 
    -   It is used to find a target element in a sorted array by repeatedly doubling the search range until the target element's value is greater than the last element of the current range. 
    -   Then, it performs a binary search within that range to find the target element. Its time complexity is `O(log n)`, which makes it efficient for large sorted arrays. 
    -   However, Exponential Search requires the array to be sorted beforehand.

- 
    -   Exponential Search is particularly useful when the target element is close to the beginning of the sorted array. 
    -   It performs better than linear search for large arrays, as it reduces the number of comparisons by exponentially increasing the search range. 
    -   However, for uniformly distributed data, other search algorithms like Binary Search or Interpolation Search may also be efficient, as they have similar time complexity and require fewer comparisons in some cases. 
    -   Overall, Exponential Search is a powerful search algorithm, especially when dealing with large sorted arrays.