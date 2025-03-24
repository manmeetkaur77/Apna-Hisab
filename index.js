
console.log("hiiiiiiiii");

import dotenv from 'dotenv';

import { app } from './app.js';
import connectDB from './db/index.js'

dotenv.config();
connectDB()

//////middlewares////////////


// respond with "hello world" when a GET request is made to the homepage

const port = 8080 || process.env.PORT;

//////////////

// Route to add a transaction
















app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})