
**1. How do you read data from a text file in Java?**
- **Answer:** You can read data from a text file in Java using FileReader and BufferedReader classes. 
    - Here's an example:
   ```java
   try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
       String line;
       while ((line = reader.readLine()) != null) {
           // Process the line
       }
   } catch (IOException e) {
       e.printStackTrace();
   }
   ```

**2. Explain the difference between character streams and byte streams in file I/O.**
- **Answer:** Character streams (`Reader` and `Writer`) are used for reading/writing character-based data, while byte streams (`InputStream` and `OutputStream`) are used for reading/writing binary data. Character streams handle character encoding automatically, making them suitable for text files. Byte streams are more general and used for all types of files.

**3. How can you write custom objects to a file using serialization? Provide an example.**
- **Answer:** You can write custom objects to a file using ObjectOutputStream. 
    -   Here's an example:
   ```java
   try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("objects.dat"))) {
       MyObject obj = new MyObject();
       oos.writeObject(obj);
   } catch (IOException e) {
       e.printStackTrace();
   }
   ```

**4. Describe the purpose of the "transient" keyword when applied to an instance variable.**
- **Answer:** The `transient` keyword in Java is used to indicate that a field should not be serialized when using object serialization. It's typically applied to fields that don't need to be persisted, like temporary or calculated values, to save space and prevent unwanted data from being stored in the serialized representation.

**5. How can you close resources like files properly after usage?**
- **Answer:** To properly close resources like files, you should use the try-with-resources statement introduced in Java 7. It automatically closes resources when the try block is exited, ensuring proper cleanup without explicitly calling the `close()` method. 
    -   For example:
   ```java
   try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
       String line;
       while ((line = reader.readLine()) != null) {
           // Process the line
       }
   } catch (IOException e) {
       e.printStackTrace();
   }
   ```

**6. How do you read from and write to files in Java?**
- **Answer:** You can read from and write to files in Java using byte streams (`InputStream` and `OutputStream`) for binary data and character streams (`Reader` and `Writer`) for text data. Use appropriate classes like `FileInputStream`, `FileOutputStream`, `FileReader`, and `FileWriter` based on your needs.

**7. Describe the difference between byte streams and character streams.**
- **Answer:** Byte streams (`InputStream` and `OutputStream`) work with binary data, reading/writing raw bytes. Character streams (`Reader` and `Writer`) handle character-based data, converting bytes to characters using character encoding. Character streams are suitable for text files and automatically manage character encoding.

**8. What is serialization? Why would you use it, and how is it implemented?**
- **Answer:** Serialization is the process of converting an object's state into a format that can be easily stored or transmitted, such as binary or XML. It's used to persist object data or send objects over a network. In Java, you use `ObjectOutputStream` to serialize objects by writing them to a stream.

**9. How can you deserialize an object back from a stream?**
- **Answer:** You can deserialize an object using `ObjectInputStream`. 
    -   Here's an example:
   ```java
   try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("objects.dat"))) {
       MyObject obj = (MyObject) ois.readObject();
   } catch (IOException | ClassNotFoundException e) {
       e.printStackTrace();
   }
   ```

