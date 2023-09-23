const Joi = require("joi");
const CustomError = require("../utils/CustomError");

const productSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number().min(0).required(),
  // ... other fields
});

const validateProduct = (req, _, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    throw new CustomError(400, error.details[0].message);
  }
  next();
};

module.exports = {
  validateProduct,
};
