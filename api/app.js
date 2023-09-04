import dotenv from "dotenv"; 
dotenv.config();
import express from "express"; 
import cors from "cors"; 
import connectDB from "./config/connectdb.js"; 
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL

// cors policy 
app.use(cors());

// database connection policy
connectDB(DATABASE_URL)

// json 
app.use(express.json());

// Load routes
app.use('/api/user', userRoutes);


app.listen(port, () => {
    console.log(`server listening on https://localhost:${port}`);
});