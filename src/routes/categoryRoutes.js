import express from "express";
import categoryController from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categories", categoryController.getAllCategory);

export default router;
