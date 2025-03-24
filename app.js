import express from "express"
import cors from "cors"

const app = express()

//middlewares//
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))


//routes declaration
app.get("/",(req,res)=>{
    res.send("Hello")
})


//routes import
import userRouter from "./routes/userRoute.js";
app.use("/api/v1/users", userRouter);


import transectionRoute from "./routes/transectionRoute.js"
app.use("/api/v1/transection", transectionRoute)

// http://localhost:8000/api/v1/users/register

export { app }