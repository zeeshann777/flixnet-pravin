import { Router } from "express";

const router = Router()

router.post("/create-user", (req,res) => {
    res.json({signup_state: "user-created"})
});

router.post("/login-user", (req,res) => {
    res.json({login_state : "user logged in"})
});

router.post("/forget-password", (req,res) => {
    res.send("password-reset")
});

export default router