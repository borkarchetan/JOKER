

**1. How can an abstract class have constructors? Provide an example.**
- **Answer:** Abstract classes can have constructors just like regular classes. These constructors are used to initialize the common properties of the abstract class. 
    -   Here's an example:
   ```java
   abstract class Shape {
       private String name;

       public Shape(String name) {
           this.name = name;
       }

       // Other abstract methods and class members
   }
   ```

**2. Explain the concept of method overriding and its relationship with polymorphism.**
- **Answer:** Method overriding is a feature that allows a subclass to provide a specific implementation for a method that is already defined in its superclass. When a subclass overrides a method, it provides its own implementation that overrides the inherited implementation from the superclass. This enables polymorphism, where a reference of the superclass type can refer to an object of the subclass type, and the appropriate overridden method is called based on the actual object's type.

**3. What is a default method in an interface, and why was it introduced in Java 8?**
- **Answer:** A default method in an interface is a method with a default implementation that can be inherited by classes that implement the interface. It was introduced in Java 8 to provide a way to add new methods to existing interfaces without breaking the implementing classes. This allows for backward compatibility while enabling the addition of new features to interfaces in later versions of Java.

**4. How does an interface enable multiple inheritance in Java?**
- **Answer:** Java supports multiple inheritance through interfaces. A class can implement multiple interfaces, allowing it to inherit the abstract methods and default methods from those interfaces. This enables a class to provide implementations for multiple sets of behaviors, promoting code reuse and modularity.

**5. Describe a scenario where you would use an abstract class over an interface, and vice versa.**
- **Answer:** You might use an abstract class when you want to provide a common base implementation for a group of related classes. Abstract classes can have fields and non-abstract methods, making them suitable for sharing code among subclasses. On the other hand, you might use an interface when you want to define a contract that multiple unrelated classes can adhere to. Interfaces are ideal for achieving multiple inheritance without the issues of traditional multiple inheritance.

**6. What is an abstract class? Why would you use one?**
- **Answer:** An abstract class in Java is a class that cannot be instantiated and is meant to serve as a base for other classes. It can contain abstract methods ([without implementation]) that its subclasses must override. You would use an abstract class when you want to provide a common base implementation and define a contract for its subclasses.

**7. Explain the concept of an interface. Can a class implement multiple interfaces?**
- **Answer:** An interface in Java is a contract that defines a set of abstract methods that implementing classes must provide. It defines a set of behaviors that a class must adhere to. Yes, a class can implement multiple interfaces, allowing it to inherit and provide implementations for methods defined in those interfaces.

**8. How does method overriding work in Java?**
- **Answer:** Method overriding in Java occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. The subclass method must have the same method signature (name, return type, and parameters). When a subclass object is referred to by a reference of its superclass type, the overridden method in the subclass is called, allowing for polymorphic behavior.

**9. Describe the "diamond problem" in relation to multiple inheritance and how Java avoids it.**
- **Answer:** The "diamond problem" is a challenge that arises in languages that support multiple inheritance. It occurs when a class inherits from two classes that share a common superclass, causing ambiguity in method and member access. Java avoids this problem by allowing a class to implement multiple interfaces (which can have method signatures) but only inherit from a single class. This way, ambiguity is eliminated, and the compiler can clearly determine which method is being invoked.

Feel free to ask if you have more questions or need further clarification!