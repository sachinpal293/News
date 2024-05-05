import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, ()=>{
        console.log(`Server is running ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(`MongoDB connection failed`, error);
})


app.use(express.json({limit:"16kb"}))
app.use(cors());
app.use(cookieParser())

// Router
import userroute from "./routers/user.routes.js";
app.use("/api/v1/user",userroute);