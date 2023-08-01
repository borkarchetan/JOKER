# Counting Sort:

Counting Sort is an integer sorting algorithm that works by determining the number of occurrences of each distinct element in the input array and then using this information to reconstruct the sorted array.

`Java Implementation:`

```java
public class CountingSort {
    public static void main(String[] args) {
        int[] arr = {4, 2, 2, 8, 3, 3, 1};
        System.out.println("Original array: ");
        printArray(arr);

        countingSort(arr);

        System.out.println("Sorted array: ");
        printArray(arr);
    }

    public static void countingSort(int[] arr) {
        if (arr.length == 0) {
            return;
        }

        // Find the maximum element to determine the range of counting array
        int max = arr[0];
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }

        int[] countArray = new int[max + 1];
        int[] sortedArray = new int[arr.length];

        // Count the occurrences of each element in the input array
        for (int num : arr) {
            countArray[num]++;
        }

        // Modify the count array to store the positions of elements in the sorted order
        for (int i = 1; i < countArray.length; i++) {
            countArray[i] += countArray[i - 1];
        }

        // Build the sorted array
        for (int i = arr.length - 1; i >= 0; i--) {
            sortedArray[countArray[arr[i]] - 1] = arr[i];
            countArray[arr[i]]--;
        }

        // Copy the sorted array back to the input array
        System.arraycopy(sortedArray, 0, arr, 0, arr.length);
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

 
- The time complexity of Counting Sort is `O(n + k)`, where n is the number of elements in the input array, and k is the range of input values. 
- It is a *linear-time sorting algorithm* and performs exceptionally well when the range of input values (k) is relatively small compared to the number of elements (n).

**`Space Complexity:`**


- The space complexity of Counting Sort is `O(n + k)`, where n is the number of elements in the input array, and k is the range of input values. 
- The algorithm uses extra memory to store the count array and the sorted array, both of which have sizes proportional to n and k.

**`Summary:`**

- 
    - Counting Sort is a non-comparison based sorting algorithm implemented in Java.
    - It works well when the range of input values is small compared to the number of elements, making it particularly efficient for integer sorting tasks. 
    - It's *time complexity* is `O(n + k)`, and its *space complexity* is `O(n + k)`. 
    - Counting Sort is most effective when the range of input values is not significantly larger than the number of elements to be sorted.

- 
    - However, Counting Sort is not suitable for sorting elements with a large range or floating-point numbers. 
    - It requires additional memory proportional to the range of input values, which can be impractical for large ranges. 
    - For such cases, other sorting algorithms like Merge Sort, Quick Sort, or Heap Sort might be more appropriate.