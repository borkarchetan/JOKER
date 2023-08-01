

# Quick Sort:

-   Quick Sort is a divide-and-conquer sorting algorithm that selects a **"pivot"** element from the array and partitions the other elements into two sub-arrays based on whether they are less than or greater than the pivot. 
-   The process is repeated recursively on the two sub-arrays until the entire array is sorted.

`JavaScript Implementation:`

```javascript
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: " + arr.join(", "));
const sortedArr = quickSort(arr);
console.log("Sorted array: " + sortedArr.join(", "));
```

**`Time Complexity:`**


-   The time complexity of Quick Sort varies depending on the choice of the pivot and the input data. 
-   In the average and best cases, when the pivot is chosen well and the array is evenly divided, the time complexity is `O(n log n)`. 
-   However, in the worst case scenario, when the pivot is always chosen as the smallest or largest element, the time complexity is `O(n^2)`. 
-   However, the worst-case scenario rarely occurs in practice due to various pivot selection strategies and randomization techniques.

**`Space Complexity:`**


-   The space complexity of Quick Sort is `O(log n)` in the average and best cases. 
-   The recursion depth of the quickSort function is log n, and additional space is used for the function call stack. 
-   However, in the worst case, the space complexity can be `O(n)` due to an unbalanced partitioning, which would create n levels of recursion.

**`Summary:`**


-   Quick Sort is an efficient divide-and-conquer sorting algorithm implemented in JavaScript. 
-   It selects a pivot element from the array, partitions the other elements based on the pivot, and recursively sorts the two resulting sub-arrays. 
-   In the average and best cases, its time complexity is `O(n log n)`, making it one of the fastest sorting algorithms. 
-   However, in the worst case, the time complexity degrades to `O(n^2)`. 
-   The space complexity is `O(log n)` in the average and best cases, and it can be `O(n)` in the worst case if the partitioning is unbalanced. 
-   Quick Sort is widely used in practice due to its efficiency, especially when implemented with good pivot selection strategies and randomization techniques to mitigate the worst-case scenario.