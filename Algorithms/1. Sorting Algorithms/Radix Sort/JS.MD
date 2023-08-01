

# Radix Sort:
-   Radix Sort is a non-comparison based sorting algorithm that sorts integers by processing individual digits from the least significant digit to the most significant digit (or vice versa). 
-   It uses counting sort as a subroutine to sort the elements based on each digit's value.

`JavaScript Implementation:`

```javascript
function radixSort(arr) {
    const max = Math.max(...arr);
    for (let exp = 1; max / exp > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
}

function countingSortByDigit(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    arr.splice(0, n, ...output);
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original array: " + arr.join(", "));
radixSort(arr);
console.log("Sorted array: " + arr.join(", "));
```

**`Time Complexity:`**

-   The time complexity of Radix Sort is `O(d * (n + k))`, where n is the number of elements in the input array, d is the number of digits in the maximum element, and k is the range of input values (usually 10 for decimal integers). 
-   Since the number of digits (d) is typically a constant for integers, the time complexity simplifies to `O(n + k)`.

**`Space Complexity:`**

-   The space complexity of Radix Sort is `O(n + k)`, where n is the number of elements in the input array, and k is the range of input values. 
-   The algorithm uses extra memory to store the output array and the count array, both of which have sizes proportional to n and k.

**`Summary:`**

- 
    -   Radix Sort is a non-comparison based sorting algorithm implemented in JavaScript. 
    -   It sorts integers by processing individual digits from the least significant digit to the most significant digit (or vice versa) using counting sort as a subroutine. 
    -   Its time complexity is `O(n + k)`, making it a linear-time sorting algorithm for integers. 
    -   Radix Sort is most efficient when the number of digits (d) is relatively small compared to the number of elements (n).

- 
    -   Radix Sort is particularly useful when sorting non-comparable elements, such as strings, where other comparison-based sorting algorithms may not be directly applicable. 
    -   However, Radix Sort is limited to sorting positive integers or numbers with a fixed maximum number of digits. 
    -   For negative integers or numbers with varying lengths, additional modifications to the algorithm are required.