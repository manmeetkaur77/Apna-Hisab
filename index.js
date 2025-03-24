
import dotenv from 'dotenv';

//working process in app.js//
import { app } from './app.js';
import connectDB from './db/index.js'

dotenv.config();
connectDB()


const port = 8080 || process.env.PORT;


app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})