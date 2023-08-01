

# Quick Sort:

-   Quick Sort is a divide-and-conquer sorting algorithm that selects a **"pivot"** element from the array and partitions the other elements into two sub-arrays based on whether they are less than or greater than the pivot. 
-   The process is repeated recursively on the two sub-arrays until the entire array is sorted.

`Java Implementation:`

```java
public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original array: ");
        printArray(arr);

        quickSort(arr, 0, arr.length - 1);

        System.out.println("Sorted array: ");
        printArray(arr);
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int partitionIndex = partition(arr, low, high);

            quickSort(arr, low, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, high);
        }
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
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

-   The time complexity of Quick Sort varies depending on the choice of the pivot and the input data. 
-   In the average and best cases, when the pivot is chosen well and the array is evenly divided, the time complexity is `O(n log n)`. 
-   However, in the worst case scenario, when the pivot is always chosen as the smallest or largest element, the time complexity is `O(n^2)`. 
-   However, the worst-case scenario rarely occurs in practice due to various pivot selection strategies and randomization techniques.

**`Space Complexity:`**

-   The space complexity of Quick Sort is `O(log n)` in the best and average cases, and `O(n)` in the worst case. 
-   The recursion depth of the quickSort method is log n, and additional space is used for the function call stack. 
-   In the worst case, the recursion depth becomes n, which results in `O(n)` space complexity.

**`Summary:`**

-   Quick Sort is an efficient divide-and-conquer sorting algorithm implemented in Java. 
-   It selects a pivot element from the array, partitions the other elements based on the pivot, and recursively sorts the two resulting sub-arrays. 
-   In the average and best cases, its time complexity is `O(n log n)`, making it one of the fastest sorting algorithms. 
-   However, in the worst case, the time complexity degrades to `O(n^2)`. 
-   The space complexity is `O(log n)` in the average and best cases and `O(n)` in the worst case. 
-   Quick Sort is widely used in practice due to its efficiency, especially when implemented with good pivot selection strategies and randomization techniques to mitigate the worst-case scenario.