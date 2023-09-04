import jwt from "jsonwebtoken";
import userModel from "../models/User.js";
import bcrypt from "bcrypt"


class userController {

    static userRegistration = async (req, res, next) => {
        // it will get from frontend...
        const { name, email, password, password_confirmation, tc } = req.body
        const user = await userModel.findOne({ email: email })
        if (user) {
            res.send({ "status": "failed", "message": "email already registered" })
        } else {
            if (name && email && password && password_confirmation && tc) {
                if (password === password_confirmation) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        const doc = new userModel({
                            name: name,
                            email: email,
                            password: hashPassword,
                            tc: tc,
                        })
                        await doc.save();
                    } catch (error) {
                        // console.log(error)
                        res.send({ "status": "failed", "message": "Unable to register. Try again!" })
                    }
                } else {
                    res.send({ "status": "failed", "message": "password not matched" })
                }

            } else {
                res.send({ "status": "failed", "message": "all fields are required" })
            }
        }
    }
}
export default userController