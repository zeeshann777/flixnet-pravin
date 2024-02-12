import { Router } from "express";

const router = Router()

router.post("/create-user", (req,res) => {
    res.send("user-created")
});

router.post("/login-user", (req,res) => {
    res.send("user-loggedin")
});

router.post("/forget-password", (req,res) => {
    res.send("password-reset")
});

export default router