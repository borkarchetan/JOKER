# Heap Sort:

- Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements in ascending or descending order. 
- It first builds a max-heap (for ascending order) or a min-heap (for descending order) from the input array, and then repeatedly extracts the root element of the heap (which is either the maximum or minimum element) and places it at the end of the sorted array. 
- The process is repeated until all elements are sorted.

`Java Implementation:`

```java
public class HeapSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original array: ");
        printArray(arr);

        heapSort(arr);

        System.out.println("Sorted array: ");
        printArray(arr);
    }

    public static void heapSort(int[] arr) {
        int n = arr.length;

        // Build max-heap (ascending order)
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // Extract elements from the heap one by one
        for (int i = n - 1; i > 0; i--) {
            // Swap root (max element) with the current last element
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // Heapify the reduced heap
            heapify(arr, i, 0);
        }
    }

    public static void heapify(int[] arr, int n, int rootIndex) {
        int largest = rootIndex;
        int leftChildIndex = 2 * rootIndex + 1;
        int rightChildIndex = 2 * rootIndex + 2;

        // Find the largest element among the root and its children
        if (leftChildIndex < n && arr[leftChildIndex] > arr[largest]) {
            largest = leftChildIndex;
        }

        if (rightChildIndex < n && arr[rightChildIndex] > arr[largest]) {
            largest = rightChildIndex;
        }

        // If the largest element is not the root, swap and heapify the affected subtree
        if (largest != rootIndex) {
            int temp = arr[rootIndex];
            arr[rootIndex] = arr[largest];
            arr[largest] = temp;

            heapify(arr, n, largest);
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


The time complexity of Heap Sort is `O(n log n)` in all cases. The first phase of building the heap takes `O(n)` time, and the second phase of repeatedly extracting elements from the heap and heapifying the reduced heap takes `O(n log n)` time.

**`Space Complexity:`**


The space complexity of Heap Sort is `O(1)` in all cases. Heap Sort is an in-place sorting algorithm, meaning it modifies the input array directly without using any additional memory that scales with the input size.

**`Summary:`**

- 
    - Heap Sort is an efficient comparison-based sorting algorithm implemented in Java. 
    - It uses a binary heap data structure to sort elements in ascending or descending order. 
    - Its time complexity is `O(n log n)` in all cases, making it one of the fastest sorting algorithms. 
    - The space complexity is `O(1)` as it performs sorting in-place without requiring extra memory.


- 
    - Heap Sort is particularly useful when a stable sort is not required, and it is also commonly used as an efficient way to implement priority queues. 
    - While it may not be as popular as other sorting algorithms like Merge Sort or Quick Sort, Heap Sort is still an excellent choice for various applications, especially when stable sorting is not a requirement.