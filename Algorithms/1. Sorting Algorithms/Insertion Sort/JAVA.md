
#   Insertion Sort:

-   Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. 
-   It repeatedly takes an element from the unsorted part of the array and inserts it into the correct position in the sorted part of the array.

`Java Implementation:`

```java
public class InsertionSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original array: ");
        printArray(arr);

        insertionSort(arr);

        System.out.println("Sorted array: ");
        printArray(arr);
    }

    public static void insertionSort(int[] arr) {
        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            // Move elements of arr[0..i-1] that are greater than the key to one position ahead of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
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

-   The time complexity of Insertion Sort is `O(n^2)` in the worst and average cases. 
-   In the best case scenario, when the array is already sorted, the time complexity is `O(n)`. 
-   However, in general, it requires shifting multiple elements for each insertion, leading to quadratic time complexity.

**`Space Complexity:`**
-   The space complexity of Insertion Sort is` O(1)` in all cases. 
-   Insertion Sort is an in-place sorting algorithm, meaning it modifies the input array directly without using any additional memory that scales with the input size.

**`Summary:`**

- 
    -   Insertion Sort is a simple and efficient sorting algorithm implemented in Java. 
    -   It builds the sorted array one element at a time by inserting each element into its correct position within the already sorted part of the array. 
    -   Its time complexity is `O(n^2)` in the worst and average cases, but it performs well on small datasets and is particularly efficient when the array is already partially sorted. 
    -   Its space complexity is `O(1)`, making it an in-place sorting algorithm.

- 
    -   While Insertion Sort can be useful for small arrays or as a step in other, more advanced sorting algorithms, it may not be the most efficient choice for larger datasets. 
    -   For larger collections of data, more efficient sorting algorithms like QuickSort, MergeSort, or HeapSort are typically preferred.