# Selection Sort:
-   Selection Sort is a simple sorting algorithm that repeatedly selects the smallest (or largest, depending on the sorting order) element from the unsorted part of the array and places it at the beginning of the sorted part. The process is repeated until the entire array is sorted.

`JavaScript Implementation:`

```javascript
function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the remaining unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: " + arr.join(", "));
selectionSort(arr);
console.log("Sorted array: " + arr.join(", "));
```

**`Time Complexity:`**

-   The time complexity of Selection Sort is `O(n^2)` in all cases. 
-   For each element in the array, the algorithm needs to scan through the remaining unsorted part to find the minimum (or maximum) element, which takes linear time. 
-   Since this process is repeated n times (n being the size of the array), the overall time complexity is `O(n^2)`.

**`Space Complexity:`**

-   The space complexity of Selection Sort is `O(1)` in all cases. Selection Sort is an in-place sorting algorithm, meaning it modifies the input array directly without using any additional memory that scales with the input size.

**`Summary:`**


- 
    -   Selection Sort is a straightforward and intuitive sorting algorithm implemented in JavaScript. 
    -   It has a time complexity of `O(n^2)` in the worst, average, and best cases, making it less efficient for larger datasets. 
    -   Its space complexity is `O(1)`, as it performs sorting in-place without requiring extra memory.

- 
    -   While Selection Sort may not be the most efficient sorting algorithm for larger collections of data, it can be useful for small arrays or as a step in other, more advanced sorting algorithms. 
    -   For larger datasets, more efficient sorting algorithms like QuickSort, MergeSort, or HeapSort are typically preferred.