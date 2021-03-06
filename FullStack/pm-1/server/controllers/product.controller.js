const Product = require("../models/product.model.js");

module.exports = {
  createProduct: (req, res) => {
    // The create method from mongoose
    Product.create(req.body)
      .then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
      })
      // handle a rejection of the api call with .catch
      .catch((err) => console.log(err));
  },

  getAllProducts: (req, res) => {
    // the interface through which we interact with the db is the Product Model
    // using the find query from mongoDB
    Product.find({})
      //returns a promise to handle with .then and .catch
      .then((allProducts) => {
        console.log(allProducts);
        res.json(allProducts);
      })
      .catch((err) => console.log(err));
  },

  getOneProduct: (req, res) => {
    // for the findOne named query in Mongoose we need a field from our Model/Schema
    // We have _id (auto generated by Mongo) that works best for this query.
    // named params are passed thru the route itself.
    Product.findOne({ _id: req.params.id })
      .then((oneProduct) => {
        console.log(oneProduct);
        res.json(oneProduct);
      })
      .catch((err) => console.log((err) => err));
  }, 

  updateProduct: (req, res) =>{
    Product.findOneAndUpdate({ _id: req.params.id}, 
      req.body,
      {new:true, runValidators: true}
      )
        .then ((updatedProduct) =>{
          console.log(updatedProduct);
          res.json(updatedProduct);
        })
          .catch((err)=>console.log(err))
  },

  deleteProduct: (req,res) => {

    Product.deleteOne({ _id: req.params.id})
      .then((deletedProduct) =>{
        console.log(deletedProduct);
        res.json(deletedProduct);
      })
        .catch((err)=>console.log(err))
  }
};
