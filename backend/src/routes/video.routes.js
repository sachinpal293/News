import { Router } from "express";
import { upload } from "../middelwears/multer.middelware.js";
import { verifyJWT } from "../middelwears/auth.middelware.js";
import { getAllVideo, uploadVideo } from "../controllers/video.controller.js";

const router = Router();
router.route("/upload").post(uploadVideo)

router.route("/getAllVideo").get(getAllVideo)
export default router;