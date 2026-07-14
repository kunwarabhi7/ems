import {Router} from 'express'
import {createEmployee,getEmployeeById,getEmployees,updateEmployee,deleteEmployee} from '../controllers/employee.controller.js'
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.post("/",authenticate ,createEmployee);
router.put("/:id",authenticate, updateEmployee);
router.delete("/:id",authenticate, deleteEmployee);

export default router;
