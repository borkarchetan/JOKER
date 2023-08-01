**Quick Sort:**

Quick Sort is a widely used sorting algorithm based on the divide-and-conquer strategy. It works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays based on whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

**Java Implementation:**

```java
import java.util.Arrays;

public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Original array: ");
        printArray(arr);

        quickSort(arr, 0, arr.length - 1);

        System.out.println("Sorted array: ");
        printArray(arr);
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);
        return i + 1;
    }

    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}
```

**Output:**

```
Original array: 
38 27 43 3 9 82 10 
Sorted array: 
3 9 10 27 38 43 82 
```

**Time Complexity:**

The time complexity of Quick Sort depends on the choice of the pivot element and the partitioning strategy. On average, the time complexity is O(n log n). However, in the worst-case scenario, where the pivot is consistently the smallest or largest element, the time complexity can degrade to O(n^2). Using a randomized pivot selection or a better partitioning scheme, such as the "Lomuto" or "Hoare" partition, can help mitigate this issue.

**Space Complexity:**

The space complexity of Quick Sort is O(log n) due to the recursive calls made on the stack. This is the space required to maintain the call stack during the sorting process.

**Summary:**

Quick Sort is implemented in Java to sort an array of integers. The output demonstrates the original and sorted arrays. Quick Sort uses a divide-and-conquer approach and has an average time complexity of O(n log n) and a worst-case time complexity of O(n^2). The choice of the pivot element and partitioning strategy can significantly impact its performance. Quick Sort is efficient for large data sets and is often used as a practical sorting algorithm in various applications.