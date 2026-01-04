import express from "express";
import { ENV } from "./lib/env.js";
import {connectDB} from "./lib/db.js"

const app=express()
console.log(ENV.PORT)
console.log(ENV.DB_URL)
 app.get("/",(req,res)=>{
    res.status(200).json({msg:"success from backend"})
 })
const startServer=async()=>{
   try {
      await connectDB()
      app.listen(ENV.PORT,()=> console.log("Server is running on port :",ENV.PORT));
   } catch (error) {
      console.log(" 💣 Error starting the server ",error)
   }
}
startServer();



