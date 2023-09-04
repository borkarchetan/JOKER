import e from "express";
import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "battleship"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("connection established successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB