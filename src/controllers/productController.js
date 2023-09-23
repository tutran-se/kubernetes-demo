const Product = require("../models/productModel");
const logger = require("../config/logger");

exports.getProducts = async (req, res, next) => {
  try {
    logger.info("Fetching all products");
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    logger.error(`Failed to fetch products: ${error.message}`);
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    logger.info(`Product ${product.name} created.`);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
