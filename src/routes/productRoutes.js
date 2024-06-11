import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/products", productController.getAllProducts);
router.post("/addProduct", productController.addProduct);
router.post("/productById", productController.getProductById);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);

export default router;
