**N-Queens Problem:**

The N-Queens Problem is a classic backtracking problem that involves placing N queens on an N×N chessboard in such a way that no two queens attack each other. In chess, a queen can attack any piece in its horizontal, vertical, and diagonal lines of movement. The goal is to find all possible distinct arrangements of N queens on the board.

**Java Implementation:**

Let's implement the N-Queens Problem in Java using backtracking:

```java
import java.util.ArrayList;
import java.util.List;

public class NQueens {

    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = '.';
            }
        }
        backtrack(result, board, 0, n);
        return result;
    }

    private static void backtrack(List<List<String>> result, char[][] board, int row, int n) {
        if (row == n) {
            List<String> solution = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                solution.add(new String(board[i]));
            }
            result.add(solution);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isValid(board, row, col, n)) {
                board[row][col] = 'Q';
                backtrack(result, board, row + 1, n);
                board[row][col] = '.';
            }
        }
    }

    private static boolean isValid(char[][] board, int row, int col, int n) {
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') {
                return false;
            }
            int leftDiagonal = col - (row - i);
            int rightDiagonal = col + (row - i);
            if (leftDiagonal >= 0 && board[i][leftDiagonal] == 'Q') {
                return false;
            }
            if (rightDiagonal < n && board[i][rightDiagonal] == 'Q') {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int n = 4;
        List<List<String>> solutions = solveNQueens(n);
        for (List<String> solution : solutions) {
            for (String row : solution) {
                System.out.println(row);
            }
            System.out.println();
        }
    }
}
```

**Output:**
```
.Q..
...Q
Q...
..Q.

..Q.
Q...
...Q
.Q..
```

**Time Complexity:**

The time complexity of the N-Queens Problem can be challenging to analyze precisely, as it depends on the number of valid solutions and the board size. However, in the worst case, the backtracking algorithm can explore all possible configurations, resulting in a time complexity of O(N!), where N is the board size.

**Space Complexity:**

The space complexity of the N-Queens Problem is O(N^2) because we need to create an N×N chessboard and store each solution.

**Summary:**

The N-Queens Problem is solved using backtracking in Java. The implementation finds all possible distinct arrangements of N queens on an N×N chessboard, ensuring that no two queens attack each other. The algorithm has a time complexity of O(N!) and a space complexity of O(N^2). The N-Queens Problem is a classic example of a backtracking problem and has various applications in solving combinatorial optimization problems.