import { Router } from "express";
import userSignUp from "../controller/userSignUp.controller.js";
import Login from "../controller/userSignIn.controller.js";

const router = Router();

console.log("Yaha tk aagye h")
router.route("/register").post(userSignUp)
router.route("/login").post(Login)
console.log("Yha bhi pahuch gaye")
export default router;