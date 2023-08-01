# Bubble Sort:

- Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order. - The process is repeated until the entire list is sorted. It is called "Bubble Sort" because smaller elements "bubble" to the top of the list with each iteration.

`JavaScript Implementation:`

```javascript
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: " + arr.join(", "));
bubbleSort(arr);
console.log("Sorted array: " + arr.join(", "));
```

### Time Complexity:

- The time complexity of Bubble Sort is `O(n^2)` in the *worst and average cases*. 
- In the *best case scenario*, when the array is already sorted, the time complexity is `O(n)`. 
- However, since Bubble Sort doesn't detect whether the list is already sorted, it will still perform n^2 comparisons.

### Space Complexity:

- The space complexity of Bubble Sort is `O(1)` in all cases. 
- Bubble Sort is an in-place sorting algorithm, meaning it modifies the input array directly without using any additional memory that scales with the input size.

### Summary:
- 
  - Bubble Sort is a simple and easy-to-implement sorting algorithm in JavaScript. 
  - It has a time complexity of `O(n^2)` in the *worst and average cases*, and `O(n)` in the best case when the array is already sorted. 
  - Its space complexity is O(1), making it an in-place sorting algorithm.

- 
  - While Bubble Sort is not efficient for large datasets, it can be a good choice for educational purposes or when the input size is small. 
  - For larger collections of data, more efficient sorting algorithms like QuickSort, MergeSort, or HeapSort are typically preferred.
