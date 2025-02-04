import express from "express";

import { signup, login, logout } from "../controller/authcontroller.js";
const router = express.Router();

// router.get("/login",(req,res) =>{
//     res.send("login")
// })
// router.get("/signup",(req,res) =>{
//     res.send("signup")
// })

// router.get("/logout",(req,res) =>{
//     res.send("logout")
// })


 router.post("/signup", signup);

 router.post("/login", login);

 router.post("/logout", logout);

export default router;