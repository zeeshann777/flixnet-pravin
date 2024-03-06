import { Router } from "express";
import fs from "fs";

const router = Router()


router.get("/user-info", (req, res) => {
    res.json({ userinfo: "user created" })
})

router.get("/available-shows", (req, res) => {
    // const imageFile = fs.readFileSync("/absolute/path/to/Images/idk.jpg");
    // const base64Image = Buffer.from(imageFile).toString('base64');
    // console.log(base64Image);
    console.log(process.cwd());


    res.json({
        Number: 5,
        shows: [
            {
                "1":
                {
                    name: "1",
                    genre: "Horror",
                    thumbnail: "http://localhost:3000/Images/idk.jpg"
                },
                "2":
                {
                    name: "2",
                    genre: "Horror",
                    thumbnail: "url"
                },
                "3":
                {
                    name: "3",
                    genre: "Horror",
                    thumbnail: "url"
                },
                "4":
                {
                    name: "4",
                    genre: "Horror",
                    thumbnail: "url"
                },
                "5":
                {
                    name: "5",
                    genre: "Horror",
                    thumbnail: "url"
                },

                "6":
                {
                    name: "6",
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