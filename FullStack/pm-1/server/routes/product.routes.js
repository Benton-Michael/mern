const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  // exporting a function here that takes in the param of app
  // its value/argument passsed is express() in server.js
  // Next using express method to make a post request to
  // '/api/products' route, which will run the function
  // found at ProductController.creatProduct()
  app.post("/api/products", ProductController.createProduct);
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/products/:id", ProductController.getOneProduct);
};
