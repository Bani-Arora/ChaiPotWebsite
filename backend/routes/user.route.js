import express from "express";
const router = express.Router();
import { signUp,login, updateUser, changePassword, deleteAccount, createOtp, resetPassword } from "../Controllers/user.controller.js";

router.post("/signup",signUp)
router.post("/login",login)
router.post("/updateUser",updateUser)
router.post("/changePassword",changePassword)
router.post("/deleteAccount",deleteAccount)
router.post("/createOtp",createOtp)
router.post("/resetPassword",resetPassword)

export default router;
