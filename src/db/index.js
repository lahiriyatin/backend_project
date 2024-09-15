import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //mongoose actually provides us a returned object that we can store in a variable.
    console.log(`MONGODB connected !! DB HOST: ${connectionInstance.Connection.host}`);
  } catch (error) {
    console.error("MONGODB connection error", error);
    process.exit(1)
    
  }
}


export default connectDB;