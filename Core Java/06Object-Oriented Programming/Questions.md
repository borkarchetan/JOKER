
**1. What is a constructor, and why is it important in object-oriented programming?**
- **Answer:** A constructor is a special method in a class that is used to initialize objects of that class. It's called when an object is created using the `new` keyword. Constructors ensure that an object's initial state is set properly, and they help prevent the creation of invalid or incomplete objects. They are crucial in object-oriented programming for proper object initialization and maintaining the integrity of an object's state.

**2. Explain the difference between an instance method and a class method (static method).**
- **Answer:** 
     - Instance Method: An instance method operates on an instance (object) of a class and can access instance variables and other instance methods. It's called using an object's reference.
     - Class Method (Static Method): A class method is associated with the class itself, not with specific instances. It can only access static variables and other static methods of the class. It's called using the class name, not an object's reference.

**3. How does Java support encapsulation, and why is it considered an important OOP principle?**
- **Answer:** Java supports encapsulation by providing access modifiers like `private`, `protected`, and `public`, which control the visibility of class members. Encapsulation ensures that the internal state of an object is hidden from outside access and can only be modified through well-defined methods. It helps in data protection, reduces coupling between classes, and promotes code maintainability and reusability.

**4. Describe the "has-a" and "is-a" relationships in object-oriented programming with examples.**
- **Answer:**
     - "Has-a" Relationship (Composition): It represents an object that is composed of one or more other objects. 
        -   For example, a `Car` "has-a" `Engine` and "has-a" `Wheels`.
     - "Is-a" Relationship (Inheritance): It represents a class that is a specialized version of another class. 
        -   For example, a `Cat` "is-a" `Animal`.

**5. What are abstract classes, and how are they different from interfaces in Java?**
- **Answer:** Abstract classes are classes that cannot be instantiated and may have both abstract and concrete methods. They can contain instance variables, constructors, and non-abstract methods. Interfaces, on the other hand, define a contract that implementing classes must adhere to, without providing any method implementations. A class can implement multiple interfaces but extend only one class (including abstract classes). Abstract classes offer a way to share code and enforce a base structure among subclasses, while interfaces allow classes to provide common behaviors without enforcing any specific inheritance hierarchy.

**6. Define a class and an object in Java.**
- **Answer:** A class in Java is a blueprint or template that defines the structure and behavior of objects. An object is an instance of a class, representing a real-world entity or concept. It encapsulates data (instance variables) and behavior (methods) defined in the class.

**7. Explain the significance of the "new" keyword when creating objects.**
- **Answer:** The "new" keyword is used to create new instances (objects) of a class. It allocates memory for the object, initializes its variables, and calls the constructor to set up its initial state. Without the "new" keyword, an object cannot be created, and the memory allocation and initialization wouldn't take place.

**8. What is a constructor? How does it differ from a method?**
- **Answer:** A constructor is a special method in a class that is automatically called when an object is created. It's responsible for initializing the object's state. Constructors have the same name as the class and have no return type. Methods, on the other hand, are general-purpose routines that perform specific actions and computations. They have a return type and are invoked using method calls.

**9. Describe the difference between instance variables and class variables (static variables).**
- **Answer:** 
     - Instance Variables: Instance variables are associated with individual instances (objects) of a class. Each object has its own copy of instance variables, and they represent the object's state.
     - Class Variables (Static Variables): Class variables are shared among all instances of a class. They are associated with the class itself rather than with individual objects. Class variables are declared using the `static` keyword and are used to store data that should be shared across instances.

