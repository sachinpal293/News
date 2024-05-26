import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGINE,
        credentials:true
    }
))

app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended:true, limit : "10mb"}))
app.use(express.static("public"))

app.use(cookieParser())


// routes import
import userRoute from "./routes/user.routes.js"
import videoRoute from "./routes/video.routes.js"
import newsRoute from "./routes/news.routes.js";

// route declration
app.use("/api/v1/user",userRoute)
app.use("/api/v1/user",videoRoute)
app.use("/api/v1/user",newsRoute)




export {app};