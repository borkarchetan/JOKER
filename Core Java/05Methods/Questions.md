
**1. What is method overloading, and how does it contribute to code readability?**
- **Answer:** Method overloading is a feature that allows a class to have multiple methods with the same name but different parameter lists. It contributes to code readability by allowing developers to use the same method name for similar operations. This makes the code more intuitive and self-explanatory. Overloading provides a consistent naming scheme while accommodating different types or numbers of parameters.

**2. Explain the concept of a return type in a method. Can methods with different return types be overloaded?**
- **Answer:** The return type of a method specifies the type of value the method will return after its execution. Methods with different return types cannot be overloaded solely based on their return types. Method overloading is determined by the method's parameter list, not by its return type.

**3. How does method recursion work? Provide an example where recursion is used.**
- **Answer:** Method recursion is a technique where a method calls itself to solve a problem. Each recursive call works on a smaller or simpler version of the problem until a base case is reached. 
    -   An example is the factorial calculation:
   ```java
   public int factorial(int n) {
       if (n == 0 || n == 1) {
           return 1;
       } else {
           return n * factorial(n - 1);
       }
   }
   ```

**4. Describe the role of access modifiers in method declarations.**
- **Answer:** Access modifiers in method declarations determine the level of visibility and access rights of the method. They control whether the method can be accessed from outside the class and from subclasses. The commonly used access modifiers are `public`, `protected`, `default` (no modifier), and `private`.

**5. How can you pass arguments to a method by value and by reference?**
- **Answer:**
     - Pass by Value: In Java, all primitive data types are passed by value. This means a copy of the value is passed to the method, and any changes made inside the method don't affect the original value.
     - Pass by Reference: In Java, object references are passed by value. This means the reference to the object is passed to the method, not a copy of the object itself. Changes made to the object's state inside the method are reflected outside as well.

**6. Describe the structure of a method declaration in Java.**
- **Answer:** A method declaration in Java consists of several components:
     - Return Type: Specifies the data type of the value the method returns (use `void` for methods that don't return a value).
     - Method Name: The name of the method, following Java naming conventions.
     - Parameter List: The list of input parameters enclosed in parentheses, with their data types and names.
     - Method Body: The code block enclosed in curly braces `{}` that defines the method's behavior.

**7. What is method overloading? Provide an example.**
- **Answer:** Method overloading is the practice of defining multiple methods in the same class with the same name but different parameter lists. 
    -   Here's an example:
   ```java
   class Calculator {
       int add(int a, int b) {
           return a + b;
       }

       double add(double a, double b) {
           return a + b;
       }
   }
   ```

**8. Explain the purpose of the "return" statement in a method.**
- **Answer:** The "return" statement is used to terminate the execution of a method and return a value to the caller. The returned value must match the method's specified return type. If the method has a return type of `void`, the "return" statement is used to exit the method without returning a value.

**9. How does recursion work? Give an example of a recursive method.**
- **Answer:** Recursion involves a method calling itself to solve a problem by breaking it down into smaller instances of the same problem. A recursive method has a base case that defines when to stop the recursion and a recursive case that reduces the problem's size. 
    -   An example is the calculation of Fibonacci numbers:
   ```java
   public int fibonacci(int n) {
       if (n <= 1) {
           return n;
       } else {
           return fibonacci(n - 1) + fibonacci(n - 2);
       }
   }
   ```

