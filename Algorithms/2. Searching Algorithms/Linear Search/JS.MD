*Let's explore the Linear Search algorithm, its JavaScript implementation, output, time complexity, space complexity, and a summary.*

# Linear Search


-   Linear Search is a simple search algorithm that sequentially checks each element in a list until a match is found or the whole list has been searched. 
-   It works for both sorted and unsorted lists.

**`JavaScript Implementation:`**


```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage:
const arr = [10, 25, 5, 18, 30, 12];
const target = 18;
const index = linearSearch(arr, target);
if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
} else {
    console.log(`Element ${target} not found in the array.`);
}
```

**`Output:`**

```
Element 18 found at index 3
```

**`Time Complexity:`**

-   The time complexity of Linear Search is `O(n)`, where n is the number of elements in the array. 
In the worst case, the algorithm may have to examine all elements in the array before finding the target element, making the time complexity directly proportional to the size of the input.

**`Space Complexity:`**

-   The space complexity of Linear Search is `O(1)`, which means the algorithm uses constant space regardless of the size of the input array. 
It does not require any additional memory that scales with the input size.

**`Summary:`**

-   
    -   Linear Search is a basic search algorithm implemented in JavaScript. 
    -   It sequentially checks each element in the array until it finds the target element or reaches the end of the array. 
    -   Its time complexity is `O(n)`, which makes it efficient for small arrays or unsorted lists. 
    -   However, for large arrays, other search algorithms like Binary Search **`(applicable for sorted arrays)`** or Hashing-based searches **`(e.g., using HashMap)`** are more efficient as they have lower time complexity.
-   
    -   Linear Search is useful when the data is not sorted, or the array is not too large. 
    -   It is simple to implement and easy to understand, making it a good choice for searching tasks when efficiency is not the primary concern, or the array size is relatively small.