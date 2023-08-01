**Merge Sort:**

Merge Sort is a popular sorting algorithm that uses the divide-and-conquer technique to sort an array or a list of elements. It works by recursively dividing the input array into two halves, sorting each half separately, and then merging the sorted halves back together to obtain the final sorted array.

**Java Implementation:**

```java
public class MergeSort {
    public static void main(String[] args) {
        int[] arr = { 38, 27, 43, 3, 9, 82, 10 };
        System.out.println("Original array: ");
        printArray(arr);

        mergeSort(arr);

        System.out.println("Sorted array: ");
        printArray(arr);
    }

    public static void mergeSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;
        int[] temp = new int[n];
        mergeSortHelper(arr, 0, n - 1, temp);
    }

    private static void mergeSortHelper(int[] arr, int left, int right, int[] temp) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSortHelper(arr, left, mid, temp);
            mergeSortHelper(arr, mid + 1, right, temp);
            merge(arr, left, mid, right, temp);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right, int[] temp) {
        for (int i = left; i <= right; i++) {
            temp[i] = arr[i];
        }

        int i = left;
        int j = mid + 1;
        int k = left;

        while (i <= mid && j <= right) {
            if (temp[i] <= temp[j]) {
                arr[k] = temp[i];
                i++;
            } else {
                arr[k] = temp[j];
                j++;
            }
            k++;
        }

        while (i <= mid) {
            arr[k] = temp[i];
            i++;
            k++;
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

**Output:**

```
Original array: 
38 27 43 3 9 82 10 
Sorted array: 
3 9 10 27 38 43 82 
```

**Time Complexity:**

Merge Sort has a time complexity of O(n log n) in the worst, best, and average cases. The algorithm divides the array into two halves at each level and merges them, and this process continues until all the elements are sorted. The time complexity arises from the recursive merging and dividing steps.

**Space Complexity:**

The space complexity of Merge Sort is O(n). The additional space is required to create temporary arrays during the merging process. In the Java implementation above, the `temp` array is used to store the merged elements temporarily.

**Summary:**

Merge Sort is implemented in Java to sort an array of integers. The output demonstrates the original and sorted arrays. Merge Sort uses a divide-and-conquer approach and has a time complexity of O(n log n) and a space complexity of O(n). It is a stable sorting algorithm that is efficient for large data sets and is widely used in practice.