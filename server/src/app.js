import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import authRoutes from './routes/auth.route.js'
import employeeRoutes from './routes/employee.route.js'
import departmentRoutes from './routes/department.route.js'
import { errorHandler } from './middlewares/error.middleware.js'

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

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"EMS API is running successfully",success:true 
    })
})


app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/departments", departmentRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);




export default app;