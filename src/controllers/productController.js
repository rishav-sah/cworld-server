import productService from "../services/productService.js";

const getAllProducts = (req, res) => {
  productService.getAllProducts((err, products) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(products);
  });
};

const getProductById = (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({
      status: "Failed",
      message: "Product ID is required",
    });
  }
  productService.getProductById(id, (err, product) => {
    if (err) {
      return res.status(500).json({
        stautus: "Failed",
        message: "Error fetching product",
      });
    }
    if (!product) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }
    res.json({
      status: "Success",
      message: "Product fetched successfully",
      data: product,
    });
  });
};

const addProduct = (req, res) => {
  const productDetails = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category_id: req.body.category_id,
    subcategory_id: req.body.subcategory_id,
    image_url: req.body.image_url,
  };
  productService.addProduct(productDetails, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        message: "Error adding product",
      });
    }
    res.status(201).json({
      status: "Success",
      message: "Product added successfully",
      data: req.body,
    });
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  productService.updateProduct(id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        message: "Error updating product",
      });
    }
    res.status(201).json({
      status: "Success",
      message: "Product updated successfully",
      data: req.body,
    });
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  if (!id || typeof id !== "number") {
    return res.status(400).json({
      status: "Failed",
      message: "Product ID is required",
    });
  }
  productService.deleteProduct(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        message: "Error deleting product",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Product deleted successfully",
    });
  });
};

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
