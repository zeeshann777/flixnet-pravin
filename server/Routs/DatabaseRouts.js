import { Router } from "express";

const router = Router()


router.get("/user-info", (req, res) => {
    res.json({ userinfo: "user created" })
})

router.get("/available-shows", (req, res) => {
    res.json({
        Number: 5,
        shows: [
            {
                "show-name":
                {
                    name: "name-show",
                    genre: "Horror",
                    thumbnail: "url"
                }
            }
        ]
    })
})
router.post("/update-userinfo", (req, res) => {
    res.json({ userstate: "userinfo-updated" })
})

router.post("/add-userinfo", (req, res) => {
    res.json({ userstate: "userinfo-added" })
})

export default router