import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import authRoutes from './routes/auth.route.js'


const app = express()

//middleware 
app.use(helmet());

app.use(
    cors({
        origin:"http://localhost:3000",credentials:true
    })
)

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(morgan("dev"))
app.use("/api/vi/auth",authRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"EMS API is running successfully",success:true 
    })
})

export default app;