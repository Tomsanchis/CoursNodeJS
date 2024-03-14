import { Router } from "express";
import shop from "../Controllers/shopController.js";
const router = Router();

router.get("/", shop);

export default router;
