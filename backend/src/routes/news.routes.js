import { Router } from "express";
import { getAllPosts, uploadPost, getAllUserPosts } from "../controllers/news.controller.js";
import { upload } from "../middelwears/multer.middelware.js";
import { verifyJWT } from "../middelwears/auth.middelware.js";
const router = Router();

router.route("/postblog").post(uploadPost);


router.route("/getAllPosts").post(getAllPosts);
router.route("/getAllUserPosts").post(getAllUserPosts);
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