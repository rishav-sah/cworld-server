import connection from "../config/db.js";

const getAllProducts = (callback) => {
  const query = "SELECT * FROM products";
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

const getProductById = (id, callback) => {
  const query = "SELECT * from products where id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

const addProduct = (product, callback) => {
  const query =
    "INSERT INTO products (name, description, price, category_id, subcategory_id, image_url) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    product.name,
    product.description,
    product.price,
    product.category_id,
    product.subcategory_id,
    product.image_url,
  ];
  connection.query(query, values, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

const updateProduct = (id, product, callback) => {
  const query =
    "UPDATE products SET name=?, description=?, price=?, category_id=?, subcategory_id =?, image_url=? WHERE id=?";
  const values = [
    product.name,
    product.description,
    product.price,
    product.category_id,
    product.subcategory_id,
    product.image_url,
    id,
  ];
  connection.query(query, values, (err, results) => {
    console.log(results);
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

const deleteProduct = (id, callback) => {
  const query = "DELETE FROM products where id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
