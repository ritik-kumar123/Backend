import dotenv from "dotenv"
dotenv.config({path:"./.env"});
import connectDB from "./db/index.js";
import { app } from "./app.js";
connectDB()
.then(()=>
{
     app.on("error", () => {
       console.log("error", error);
       throw error;
     });
app.listen(process.env.PORT||4000, () => {
  console.log(`Server is running at PORT ${process.env.PORT}`);
});
})
.catch((err)=>
{
    console.log("MONGO db connection failed !!! ", err);
})




















/*
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",()=>{
            console.log("error",error);
            throw error
        })
        app.listen(process.env.PORT,()=>
        {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    }
    catch(error)
    {
        console.error("Error",error);
        throw err
    }
})()*/