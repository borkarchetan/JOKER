
**1. How do generics enhance type safety in Java?**
   - Generics enhance type safety in Java by enabling compile-time type checking. They allow you to specify the type of elements that a collection or method can work with. This ensures that you cannot add or retrieve elements of the wrong type from collections, reducing the risk of runtime errors and class cast exceptions.

**2. Explain the concept of type erasure in Java generics.**
   - Type erasure is a feature in Java generics where type information of generic types is removed during compilation to ensure compatibility with the older non-generic code. This means that at runtime, generic types are treated as their raw type (e.g., `List` instead of `List<String>`). Type erasure helps maintain backward compatibility but limits some runtime type information.

**3. How can you define a generic class in Java? Provide an example.**
   - A generic class in Java is defined using angle brackets `<T>` after the class name, where `T` represents the type parameter. Here's an example of a generic `Box` class:
   ```java
   public class Box<T> {
       private T content;
   
       public void setContent(T content) {
           this.content = content;
       }
   
       public T getContent() {
           return content;
       }
   }
   ```

**4. Describe the purpose of bounded type parameters and wildcards in generics.**
   - Bounded type parameters restrict the range of acceptable types for a generic parameter. You can specify upper or lower bounds for the type. Wildcards (`?`) in generics allow more flexibility when working with unknown types. There are three types of wildcards: `<?>` (unbounded wildcard), `<? extends T>` (upper bounded wildcard), and `<? super T>` (lower bounded wildcard).

**5. How does the `ArrayList` class use generics to store elements of different types?**
   - The `ArrayList` class uses generics to define the type of elements it will hold. For example, if you create an `ArrayList<String>`, it will only allow adding and retrieving `String` objects. This ensures type safety and eliminates the need for explicit casting when retrieving elements.

**6. What are generics, and why are they useful in Java?**
   - Generics in Java allow you to create classes, interfaces, and methods that operate on different data types while providing compile-time type safety. They enable you to create reusable code and avoid type casting by specifying the type of elements a class or method will work with, reducing errors and improving code readability.

**7. How can you create a generic class or method?**
   - To create a generic class, use the `<T>` syntax after the class name, and replace `T` with the desired type parameter. To create a generic method, declare the type parameter before the return type. For example:
   ```java
   public class Box<T> {
       // ...
   }
   
   public <T> void printArray(T[] array) {
       // ...
   }
   ```

**8. Explain the concept of bounded type parameters and wildcard usage.**
   - Bounded type parameters restrict the types that can be used as type arguments in generics. You can specify upper bounds (`<T extends SomeClass>`) or lower bounds (`<T super SomeClass>`) to define acceptable types. Wildcards (`<?>`, `<? extends T>`, `<? super T>`) are used to work with unknown types, allowing greater flexibility when dealing with generics.

**9. What is type erasure, and how does it impact generics at runtime?**
   - Type erasure is a process where the type information of generic types is removed during compilation, and generic type parameters are replaced with their raw types. This allows Java to maintain compatibility with non-generic code. At runtime, generic types are treated as their raw types, which can lead to limitations in accessing type-specific information or performing certain operations based on type parameters.
