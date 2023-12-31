const logger = require("../config/logger");

function errorHandler(err, _, res, next) {
  if (false) {
    next();
  }
  logger.error(err.message);
  res.status(err.statusCode || 500).send({
    success: false,
    error: err.message || "Server Error",
  });
}

module.exports = errorHandler;
