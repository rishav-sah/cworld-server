import categoryService from "../services/categoryService.js";

const getAllCategory = (req, res) => {
  categoryService.getAllCategory((err, categories) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(categories);
  });
};

export default { getAllCategory };
