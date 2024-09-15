import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";

configDotenv({
  path: './.env'
})

connectDB()















//This is not that professional way of writing the code

/*
BASICALLY THERE ARE 2 WAYS TO CONNECT DATABASE

1. WRITING WHOLE CODE IN INDEX.JS 
2. MAKING SEPERATE FILE AND KEEP INDEX.JS MORE ORGANISED

*/


/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

;(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", error)
    console.log("ERROR: ", error);
    throw err

    app.listen(process.env.PORT, ()=>{
      console.log(`app listening on ${process.env.PORT}`);
      
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw err
  }
})()
*/