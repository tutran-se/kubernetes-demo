const Product = require("../models/productModel");
const logger = require("../config/logger");
// const CustomError = require("../utils/CustomError");

exports.getProducts = async (req, res, next) => {
  try {
    logger.info("Fetching all products");
    // const products = await Product.find();
    // const products = [{ name: "Product 1" }, { name: "Product 2" }, { name: "Product 3" }];
    // res.json(products);
    // throw new CustomError(400, "Custom error message");
    res.json({ mongodb: process.env.MONGO_URL, hello: "Minh Bống" });
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
