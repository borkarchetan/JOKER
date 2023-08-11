
**1. Explain the difference between checked and unchecked exceptions in Java.**
- **Answer:** Checked exceptions are exceptions that must be either caught using a try-catch block or declared in the method's `throws` clause. They are typically used for scenarios where the program can reasonably recover from the exception. Unchecked exceptions (also known as runtime exceptions) do not require explicit handling and can be caught if desired. They are often caused by programming errors and represent issues that are difficult to recover from at runtime.

**2. How can you handle exceptions using a try-catch block? Provide an example.**
- **Answer:** You can handle exceptions using a try-catch block as follows:
   ```java
   try {
       // Code that may throw an exception
   } catch (ExceptionType1 e1) {
       // Handle ExceptionType1
   } catch (ExceptionType2 e2) {
       // Handle ExceptionType2
   } finally {
       // Code that executes regardless of whether an exception occurred
   }
   ```

**3. Describe the purpose of the "finally" block in exception handling.**
- **Answer:** The `finally` block in exception handling contains code that executes regardless of whether an exception occurred or not. It's often used for cleanup operations, like closing resources, that need to be performed regardless of whether an exception was thrown. The `finally` block is executed after the `try` block or after the `catch` block if an exception was caught.

**4. How does the "throws" clause contribute to method signature and method calling?**
- **Answer:** The `throws` clause in a method declaration specifies the exceptions that the method might throw. It contributes to the method's signature and indicates the checked exceptions that callers of the method need to handle using a try-catch block or propagate using their own `throws` clause.

**5. What is the difference between throwing and catching an exception?**
- **Answer:** Throwing an exception involves using the `throw` keyword to indicate that an exceptional condition has occurred. This is typically done inside a method. Catching an exception involves using a try-catch block to handle the exception when it's thrown. The catch block specifies the type of exception to catch and the code to execute if that type of exception is thrown.

**6. What is an exception in Java? Give examples of checked and unchecked exceptions.**
- **Answer:** An exception in Java is an event that disrupts the normal flow of a program's execution. Examples of checked exceptions include `IOException` and `SQLException`. Examples of unchecked exceptions (runtime exceptions) include `NullPointerException`, `ArrayIndexOutOfBoundsException`, and `IllegalArgumentException`.

**7. How do you handle exceptions using try-catch blocks?**
- **Answer:** You handle exceptions using try-catch blocks by enclosing the code that might throw an exception in a `try` block and providing one or more `catch` blocks to handle specific types of exceptions. If an exception occurs within the `try` block, the appropriate `catch` block is executed based on the exception's type.

**8. Explain the role of the "finally" block in exception handling.**
- **Answer:** The `finally` block is used for code that should execute regardless of whether an exception occurred or not. It's often used for cleanup operations such as closing resources. The code in the `finally` block is executed after the `try` block or after the appropriate `catch` block (if an exception was caught).

**9. What is the purpose of the "throws" clause in method declarations?**
- **Answer:** The `throws` clause is used to declare the checked exceptions that a method might throw. It informs callers of the method about the potential exceptions they need to handle. When a method declares a checked exception in its `throws` clause, callers must either catch the exception using a try-catch block or propagate the exception by including the same exception type in their own `throws` clause.

