const mongoose = require("mongoose");

// Define Variant Schema (nested subdocument)
const variantSchema = new mongoose.Schema({
  color: { type: String },
  size: { type: String },
  stock: { type: Number, default: 0 }
});

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  variants: [variantSchema]
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
