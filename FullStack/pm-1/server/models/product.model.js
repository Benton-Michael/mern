const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    price: {
      type: Number,
    },

    description: {
      type: String,
    },

    //an _id will be created with each new product's creation (or document in Mongo terminology)
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
