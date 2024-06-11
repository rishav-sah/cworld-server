import express from "express";
import dotenv from "dotenv";
import productRoutes from "./src/routes/productRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});