import { Router } from "express";

const router = Router()


router.get("/user-info",(req,res) => {
    res.send("user created")
})


router.post("/update-userinfo",(req,res) => {
    res.send("userinfo-updated")
})

router.post("/add-userinfo", (req,res) => {
    res.send("userinfo-added")
})

export default router