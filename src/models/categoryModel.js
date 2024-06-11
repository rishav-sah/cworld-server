import connection from "../config/db.js";

const getAllCategory = (callback) => {
  const query = "SELECT * FROM categories";
  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

export default { getAllCategory };
