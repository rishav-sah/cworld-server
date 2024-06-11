import categoryModel from "../models/categoryModel.js";

const getAllCategory = (callback) => {
  categoryModel.getAllCategory(callback);
};

export default { getAllCategory };
