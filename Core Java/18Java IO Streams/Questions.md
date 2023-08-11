
**1. What is the purpose of I/O streams in Java?**
   - I/O (Input/Output) streams in Java provide a way to read and write data between a program and external sources like files, network sockets, and more. Streams abstract the low-level details of data transfer, allowing programs to handle data in a uniform manner regardless of the data source or destination.

**2. How can you read data from a file using byte streams?**
   - You can use `FileInputStream` to read data from a file using byte streams. Here's an example:
   ```java
   try (FileInputStream fis = new FileInputStream("file.txt")) {
       int data;
       while ((data = fis.read()) != -1) {
           // Process the data
           System.out.print((char) data);
       }
   } catch (IOException e) {
       e.printStackTrace();
   }
   ```

**3. Explain the concept of character encoding in Java I/O.**
   - Character encoding defines how characters are represented as bytes in memory or files. In Java I/O, when you read or write character data, you need to specify the character encoding. Common encodings include UTF-8, UTF-16, ISO-8859-1, and more.

**4. How does the `BufferedReader` class enhance reading efficiency in Java?**
   - The `BufferedReader` class enhances reading efficiency by buffering input. It reads data from a source and stores it in an internal buffer. When you read data using methods like `readLine()`, it reads from the buffer rather than making frequent direct reads from the underlying input source. This reduces the number of I/O operations and improves performance.

**5. What is the role of the `FilterInputStream` class in Java I/O?**
   - The `FilterInputStream` class is a base class for implementing various input stream filters. It allows you to wrap an existing input stream with additional functionality. Examples of subclasses include `BufferedInputStream`, `DataInputStream`, and `ObjectInputStream`, which add buffering, data formatting, and object serialization capabilities to the underlying input stream.

**6. What are I/O streams in Java?**
   - I/O streams in Java are a way to handle input and output operations with various data sources and destinations, such as files, network connections, and keyboard input. Streams provide an abstraction layer that allows you to work with data in a consistent manner regardless of the source or destination.

**7. Explain the difference between byte streams and character streams.**
   - Byte streams are used for reading and writing raw binary data, while character streams are used for reading and writing text data in the form of characters. Byte streams operate on bytes, making them suitable for images, audio, and other non-textual data. Character streams use character encoding to handle text data correctly, supporting languages and character sets.

**8. How can you read and write data using InputStreams and OutputStreams?**
   - `InputStream` and `OutputStream` are abstract classes for reading and writing bytes of data, respectively. You can use their subclasses, like `FileInputStream`, `FileOutputStream`, `ByteArrayInputStream`, and `ByteArrayOutputStream`, to interact with various data sources and destinations.

**9. Describe the purpose of buffering in I/O operations.**
   - Buffering in I/O operations involves using an intermediate buffer to temporarily store data being read from or written to a source or destination. It reduces the frequency of direct I/O operations, improving performance by minimizing overhead. Buffered I/O is more efficient when dealing with small reads and writes, as data is transferred in larger chunks.
