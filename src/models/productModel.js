const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // other properties like price, description, etc.
});

module.exports = mongoose.model("Product", ProductSchema);
