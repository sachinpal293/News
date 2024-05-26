import { Router } from "express";
import { getAllPosts, uploadPost } from "../controllers/news.controller.js";
import { upload } from "../middelwears/multer.middelware.js";
import { verifyJWT } from "../middelwears/auth.middelware.js";
const router = Router();

router.route("/postblog").post(verifyJWT,
    upload.single('coverImage')
    , uploadPost);


router.route("/getAllPosts").get(verifyJWT, getAllPosts);

router.route("/getdata").get((req,res)=>{
    res.send([
        {
            name:"Sachin",
            salary:"15CR"
        },
        {
            name:"Jarves",
            salary:"142lpa"
        }
    ])
})
export default router;