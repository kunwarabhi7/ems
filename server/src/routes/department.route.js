import {Router} from 'express'
import {createDepartment,getDepartments,updateDepartment,deleteDepartment} from '../controllers/department.controller.js'
import { authenticate } from '../middlewares/auth.middleware.js';


const router = Router();

router.get("/", getDepartments);
router.post("/",authenticate, createDepartment);
router.put("/:id",authenticate, updateDepartment);
router.delete("/:id",authenticate, deleteDepartment);

export default router;