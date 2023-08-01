**KMP (Knuth-Morris-Pratt) Algorithm:**

The Knuth-Morris-Pratt (KMP) algorithm is a string-matching algorithm that efficiently finds occurrences of a pattern in a given text. It avoids unnecessary character comparisons by using a preprocessed array to skip characters when a mismatch occurs.

**Java Implementation:**

Let's implement the KMP algorithm in Java:

```java
public class KMPAlgorithm {

    public static int[] buildPrefixTable(String pattern) {
        int[] prefixTable = new int[pattern.length()];
        int i = 0;
        int j = 1;

        while (j < pattern.length()) {
            if (pattern.charAt(i) == pattern.charAt(j)) {
                prefixTable[j] = i + 1;
                i++;
                j++;
            } else {
                if (i == 0) {
                    prefixTable[j] = 0;
                    j++;
                } else {
                    i = prefixTable[i - 1];
                }
            }
        }

        return prefixTable;
    }

    public static int kmpSearch(String text, String pattern) {
        int[] prefixTable = buildPrefixTable(pattern);
        int i = 0; // index for text
        int j = 0; // index for pattern

        while (i < text.length() && j < pattern.length()) {
            if (text.charAt(i) == pattern.charAt(j)) {
                i++;
                j++;
            } else {
                if (j == 0) {
                    i++;
                } else {
                    j = prefixTable[j - 1];
                }
            }
        }

        if (j == pattern.length()) {
            return i - j; // The starting index of the matched pattern in the text
        } else {
            return -1; // Pattern not found in the text
        }
    }

    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";

        int index = kmpSearch(text, pattern);

        if (index != -1) {
            System.out.println("Pattern found at index " + index);
        } else {
            System.out.println("Pattern not found in the text.");
        }
    }
}
```

**Output:**

```
Pattern found at index 10
```

**Time Complexity:**

The time complexity of the KMP algorithm is O(n + m), where n is the length of the text and m is the length of the pattern. The algorithm preprocesses the pattern to build the prefix table in O(m) time, and then it performs the string matching in O(n) time.

**Space Complexity:**

The space complexity of the KMP algorithm is O(m), where m is the length of the pattern. The algorithm uses extra space to store the prefix table.

**Summary:**

The KMP (Knuth-Morris-Pratt) algorithm is implemented in Java to efficiently find occurrences of a pattern in a given text. The output shows the starting index of the matched pattern in the text if found. The time complexity of the algorithm is O(n + m), and the space complexity is O(m).