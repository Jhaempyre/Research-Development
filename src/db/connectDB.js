import {DB_NAME} from "../constant.js";
// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n MongoDB connected !! DB host:${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

const connectToRamDatabase = async() => {
  try {
    console.log("ram")
    const connectionInstance= await mongoose.createConnection(`${process.env.MONGODB_URI}/ram`).asPromise();
    console.log(connectionInstance)
    console.log(`\n MongoDB connected !! DB host:${connectionInstance.connection.host}`);
    console.log('Connected to Ram database');
  } catch (error) {
    console.error('Error connecting to Ram database:', error.message);
  }
};

const connectToShyamDatabase = async () => {
  try {
    await mongoose.createConnection(`${process.env.MONGODB_URI}/shyam`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Shyam database');
  } catch (error) {
    console.error('Error connecting to Shyam database:', error.message);
  }
};

export { connectDB, connectToRamDatabase, connectToShyamDatabase };
