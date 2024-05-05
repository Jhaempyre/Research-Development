import Express from 'express' 
import dotenv from "dotenv"
import {connectDB} from "./db/connectDB.js"
import {app} from './app.js'

dotenv.config({
    path:'./env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



/*
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection URI (master database)
const mongoURI = 'mongodb://localhost/master_database';

// Connect to the master database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to master database'))
  .catch(err => console.error('Error connecting to master database:', err));

// Define User schema and model for the master database
const UserSchema = new mongoose.Schema({
  mobileNumber: { type: String, required: true },
  // Other user details...
});

const UserModel = mongoose.model('User', UserSchema);

// User sign-up endpoint
app.post('/signup', async (req, res) => {
  const { mobileNumber,} = req.body;

  try {
    // Create a new database with the user's mobile number as the name
    const userDB = mongoose.createConnection(`mongodb://localhost/${mobileNumber}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Created database for user ${mobileNumber}`);

    // Save user details to the master database
    const newUser = new UserModel({ mobileNumber,});
    await newUser.save();

    res.status(201).send('User signed up successfully');
  } catch (err) {
    console.error('Error signing up user:', err);
    res.status(500).send('Internal Server Error');
  }
});

// User login endpoint
app.post('/login', async (req, res) => {
  const { mobileNumber,} = req.body;

  try {
    // Find user in the master database
    const user = await UserModel.findOne({ mobileNumber });

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Connect to the user's database
    const userDB = mongoose.createConnection(`mongodb://localhost/${mobileNumber}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Connected to database for user ${mobileNumber}`);

    // Perform further operations with userDB

    res.status(200).send('User logged in successfully');
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
