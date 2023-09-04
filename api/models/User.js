import mongoose from "mongoose";

// defining schema

const userSchema = new mongoose.Schema({
    name: { type: "string", required: true, trim: true },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
    tc: { type: Boolean, required: true }
});


// create a model
const userModel = mongoose.model('user', userSchema)
export default userModel
