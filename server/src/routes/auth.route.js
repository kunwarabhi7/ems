import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const router = Router();


console.log("Auth routes loaded");

router.post("/register",register);
router.post("/login",login)

router.get("/test", (req, res) => {
  res.send("Auth Route Working");
});

export default router;