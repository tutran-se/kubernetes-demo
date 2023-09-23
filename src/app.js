const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./config/logger");
const requestLogger = require("./middlewares/requestLogger");
const swaggerDocs = require("./config/swagger");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Database connection

// Request logger
app.use(requestLogger);

// Routes
app.use("/", productRoutes);
app.get("/health", (_, res) => res.status(200).send("OK"));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => logger.info(`Server running on http://localhost:${PORT}`));
