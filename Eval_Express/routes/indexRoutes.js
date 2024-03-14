import { Router } from "express";
import index from "../Controllers/indexController.js";
const router = Router();

router.get("/", index);

export default router;
