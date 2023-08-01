*Let's explore Bucket Sort, its JavaScript implementation, output, time complexity, space complexity, and a summary.*

# Bucket Sort:

-   Bucket Sort is a sorting algorithm that works well when the input elements are uniformly distributed over a range. 
-   It divides the range into multiple buckets, each capable of holding a subset of the input elements. 
-   The elements are distributed into these buckets based on their values. 
-   Bucket Sort then sorts each individual bucket using another sorting algorithm (typically Insertion Sort) and finally concatenates the sorted buckets to get the sorted output.

`JavaScript Implementation:`

```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

function bucketSort(arr, numBuckets) {
    const n = arr.length;
    if (n === 0) return arr;

    // Find the minimum and maximum values in the array
    let minVal = arr[0];
    let maxVal = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] < minVal) minVal = arr[i];
        if (arr[i] > maxVal) maxVal = arr[i];
    }

    // Calculate the range of each bucket
    const bucketRange = (maxVal - minVal) / numBuckets;
    const buckets = new Array(numBuckets).fill().map(() => []);

    // Distribute elements into buckets
    for (let i = 0; i < n; i++) {
        const bucketIdx = Math.floor((arr[i] - minVal) / bucketRange);
        buckets[bucketIdx].push(arr[i]);
    }

    // Sort each bucket and concatenate the results
    let sortedArr = [];
    for (let i = 0; i < numBuckets; i++) {
        insertionSort(buckets[i]);
        sortedArr = sortedArr.concat(buckets[i]);
    }

    return sortedArr;
}

// Example usage:
const arr = [3.2, 1.8, 4.7, 2.5, 1.3, 3.5];
const numBuckets = 3;
const sortedArr = bucketSort(arr, numBuckets);
console.log("Sorted Array:", sortedArr);
```

`Output:`

```
Sorted Array: [1.3, 1.8, 2.5, 3.2, 3.5, 4.7]
```

**`Time Complexity:`**

- 
The time complexity of Bucket Sort depends on the sorting algorithm used to sort individual buckets and how the elements are distributed into the buckets. In the average case, when the elements are evenly distributed across the buckets, the time complexity is O(n + k), where n is the number of elements and k is the number of buckets. In the worst case, when all elements fall into the same bucket, the time complexity becomes O(n^2) if using Insertion Sort for each bucket.

**`Space Complexity:`**

- 
    The space complexity of Bucket Sort is O(n + k), where n is the number of elements and k is the number of buckets. It is due to the space required to store the elements and the buckets.

**`Summary:`**

- 
    - Bucket Sort is a sorting algorithm that works well when the input elements are uniformly distributed over a range. 
    - It divides the range into multiple buckets, distributes the elements into these buckets based on their values, and then sorts each individual bucket using another sorting algorithm *(e.g., Insertion Sort)*. 
    - Finally, the sorted buckets are concatenated to obtain the overall sorted output. 
    - Bucket Sort has a time complexity of `O(n + k)` on average, making it efficient for sorting elements that are uniformly distributed. 
    - However, it can become less efficient when many elements fall into the same bucket, leading to a worst-case time complexity of `O(n^2)` if using a quadratic sorting algorithm for individual buckets.
-    
    - Bucket Sort is a useful algorithm in specific scenarios and can be employed when the input data is well-distributed over a range.