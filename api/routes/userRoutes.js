// 35:37

import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

// public routes
router.post('/register', userController.userRegistration)


// protected routes

export default router