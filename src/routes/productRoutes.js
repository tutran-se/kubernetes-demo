const express = require("express");
const { getProducts, createProduct } = require("../controllers/productController");
const { validateProduct } = require("../middlewares/validation");

const router = express.Router();

router.route("/").get(getProducts);
router.route("/").post(validateProduct, createProduct);
// Define other routes for create, update, delete.

module.exports = router;
