import { app } from "./app.js";
import chalk from "chalk";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, ()=>{
        console.log(chalk.bgGreen(`Server is running at port ${process.env.PORT}`))
    })
})
.catch((error)=>{
   console.log(`MongoDB connection faild`, error)
})


// 1. Firsr approch to connect the DB

// import express from "express";
// const app = express();
// (async () =>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error)=>{
//         console.log("Error: ",error)
//         throw error
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//        })
//     } catch (error) {
//         console.log("ERROR :", error)
//         throw error
//     }
// })()
