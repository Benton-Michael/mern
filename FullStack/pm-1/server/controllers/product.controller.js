const Product = require("../models/product.model.js");

module.exports = {
  createProduct: (req, res) => {
    // create method from mongoose
    Product.create(req.body)
      .then((newProduct) => res.json(newProduct))
      // handle a rejection of the api call with .catch
      .catch((err) => console.log(err));
  },
};
