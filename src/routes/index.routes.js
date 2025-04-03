import { Router } from "express";
import { indexQuery } from "../controllers/index.controller.js";

const router = Router()

router.get('/query', indexQuery )

export default router;