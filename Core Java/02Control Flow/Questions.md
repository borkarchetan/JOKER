
**1. Explain the concept of short-circuiting in conditional statements.**
- **Answer:** Short-circuiting is a behavior in conditional statements where the evaluation of a logical expression stops as soon as the outcome is determined. In an `&&` (logical AND) operation, if the left operand is `false`, the right operand is not evaluated because the entire expression will be `false` regardless. Similarly, in an `||` (logical OR) operation, if the left operand is `true`, the right operand is not evaluated because the entire expression will be `true` regardless.

**2. How do you avoid infinite loops? Provide an example.**
- **Answer:** To avoid infinite loops, ensure that the loop condition has a way to become `false` at some point. For example, using a counter or a conditional statement that evaluates to `false` can prevent infinite loops. 
    -   Example:
   ```java
   int count = 0;
   while (count < 5) {
       System.out.println("Count: " + count);
       count++;
   }
   ```

**3. What is the difference between a "break" statement and a "continue" statement in a loop?**
- **Answer:**
     - "break" Statement: The "break" statement is used to immediately exit the loop, skipping the remaining iterations.
     - "continue" Statement: The "continue" statement is used to skip the current iteration and move to the next iteration of the loop.

**4. How can you achieve multiple cases executing the same code in a switch statement?**
- **Answer:** To achieve multiple cases executing the same code in a switch statement, you can list those cases without breaks. All cases after the matching one will be executed sequentially until a break is encountered or the switch statement ends. 
    -   Example:
   ```java
   int day = 3;
   switch (day) {
       case 1:
       case 2:
       case 3:
           System.out.println("Weekday");
           break;
       case 4:
       case 5:
           System.out.println("Weekend");
           break;
   }
   ```

**5. Describe how "for-each" loop works and in what situations it is most useful.**
- **Answer:** The "for-each" loop is used to iterate through elements of arrays or collections sequentially. It simplifies array and collection traversal by eliminating the need for explicit index management. It's especially useful when you want to iterate through all elements without modifying them or knowing their indices.

**6. How do you use if-else statements to make decisions in Java?**
- **Answer:** The `if-else` statement is used to make decisions in Java. It evaluates a condition, and if it's `true`, the code block following the `if` statement is executed. If the condition is `false`, the code block following the `else` statement is executed (if present). 
    -   Example:
   ```java
   int age = 18;
   if (age >= 18) {
       System.out.println("You can vote.");
   } else {
       System.out.println("You cannot vote.");
   }
   ```

**7. Describe the switch statement and provide an example of its usage.**
- **Answer:** The `switch` statement allows you to select one of many code blocks to be executed based on a specified value. It's commonly used for multiple-choice scenarios. 
    -   Example:
   ```java
   int day = 3;
   switch (day) {
       case 1:
           System.out.println("Monday");
           break;
       case 2:
           System.out.println("Tuesday");
           break;
       // ... other cases
       default:
           System.out.println("Invalid day");
   }
   ```

**8. What is a loop? Explain the difference between a while loop and a do-while loop.**
- **Answer:** A loop is a control structure that allows a certain block of code to be repeated multiple times. 
     - While Loop: In a while loop, the condition is evaluated before the loop body. If the condition is `true`, the loop executes.
     - Do-While Loop: In a do-while loop, the loop body is executed at least once, and then the condition is checked. If the condition is `true`, the loop continues.

**9. How does the "break" statement work within loops?**
- **Answer:** The "break" statement is used to exit a loop prematurely, regardless of whether the loop condition is still true or not. It's often used to terminate the loop when a specific condition is met. Once the "break" statement is executed, the control moves to the next statement after the loop.

