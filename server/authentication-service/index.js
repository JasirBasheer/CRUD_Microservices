import express from "express"
import authenticationRouter from "./routes/authenticationRouter.js"
import { connectDB } from "./helpers/dbConnect.js"

const app = express()
app.use(express.json())
app.use('/auth',authenticationRouter)
connectDB()
app.listen(4000,()=>{
    console.log('http://localhost:4000')
})