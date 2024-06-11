import productModel from "../models/productModel.js";

const getAllProducts = (callback) => {
  productModel.getAllProducts(callback);
};

const getProductById = (id, callback) => {
  productModel.getProductById(id, callback);
};

const addProduct = (product, callback) => {
  productModel.addProduct(product, callback);
};

const updateProduct = (id, product, callback) => {
  productModel.updateProduct(id, product, callback);
};

const deleteProduct = (id, callback) => {
  productModel.deleteProduct(id, callback);
};

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
