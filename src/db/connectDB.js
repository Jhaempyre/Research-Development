import mongoose, { connect } from "mongoose";
import DB_NAME from "../constant.js";



const connectDB = async()=>{
    try {
        console.log('DB_NAME:', DB_NAME); // Log the value of DB_NAME
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("Error connecting to databse ",error.message)
        process.exit(1)
    }
}

export  default connectDB; 