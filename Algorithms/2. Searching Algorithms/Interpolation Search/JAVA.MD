*Let's explore the Interpolation Search algorithm, its Java implementation, output, time complexity, space complexity, and a summary.*

# Interpolation Search:


-   Interpolation Search is a search algorithm used to find a target element in a sorted array. 

-   It works on uniformly distributed arrays by estimating the position of the target element based on the values of the first and last elements in the array.

**`Java Implementation:`**

```java
public class InterpolationSearch {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50, 60, 70, 80, 90};
        int target = 60;

        int index = interpolationSearch(arr, target);
        if (index != -1) {
            System.out.println("Element " + target + " found at index " + index);
        } else {
            System.out.println("Element " + target + " not found in the array.");
        }
    }

    public static int interpolationSearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;

        while (low <= high && target >= arr[low] && target <= arr[high]) {
            if (low == high) {
                if (arr[low] == target) {
                    return low;
                }
                return -1;
            }

            // Estimate the position to check using interpolation formula
            int pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]);

            if (arr[pos] == target) {
                return pos;
            } else if (arr[pos] < target) {
                low = pos + 1;
            } else {
                high = pos - 1;
            }
        }

        return -1;
    }
}
```

**`Output:`**

```
Element 60 found at index 5
```

**`Time Complexity:`**

-   The time complexity of Interpolation Search is `O(log log n)` on average when the data is uniformly distributed. 

-   In the worst case, it can become `O(n)` when the data is not uniformly distributed and approaches a linear search.

**`Space Complexity:`**

-   The space complexity of Interpolation Search is `O(1)`, which means the algorithm uses constant space regardless of the size of the input array.

-   It does not require any additional memory that scales with the input size.

**`Summary:`**

- 
    -   Interpolation Search is a search algorithm implemented in Java. 

    -   It is used to find a target element in a sorted array by estimating its position based on the values of the first and last elements in the array.

    -   Its time complexity is `O(log log n)` on average, making it efficient for uniformly distributed data. 

    -   However, in the worst case, it can become `O(n)` and perform similarly to linear search for non-uniformly distributed data.


- 
    -   Interpolation Search is particularly useful when searching large, uniformly distributed arrays, as it can quickly approximate the target element's position. 

    -   However, for non-uniformly distributed data or small arrays, other search algorithms like Binary Search or Jump Search may be more suitable due to their more consistent time complexity.