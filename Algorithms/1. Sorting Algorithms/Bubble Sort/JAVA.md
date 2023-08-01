**Bubble Sort:**

- Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order. - The process is repeated until the entire list is sorted.

`Java Implementation:`

```java
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original array: ");
        printArray(arr);

        bubbleSort(arr);

        System.out.println("Sorted array: ");
        printArray(arr);
    }

    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j + 1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}
```

**`Time Complexity:`**

- The time complexity of Bubble Sort is O(n^2) in the worst and average cases. 
- In the best case scenario, when the array is already sorted, the time complexity is O(n).

**`Space Complexity:`**

- The space complexity of Bubble Sort is `O(1)` in all cases. 
- Bubble Sort is an in-place sorting algorithm, meaning it doesn't require any additional memory proportional to the size of the input array.

**`Summary:`**

- 
    - Bubble Sort is a simple and straightforward sorting algorithm implemented in Java.
    - Its **time complexity** is `O(n^2)` in the *worst* and *average cases*, and `O(n)` in the *best case* when the array is already sorted.
    - The space complexity is `O(1)` as it operates in-place without requiring additional memory.
- 
    - Due to its quadratic time complexity, Bubble Sort is not the most efficient sorting algorithm for larger datasets. 
    - More efficient algorithms like QuickSort or MergeSort are usually preferred for larger collections of data.
