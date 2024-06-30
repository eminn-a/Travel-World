const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(auth);

// Route setup
app.use(routes);

// Database connection (consider moving this to a separate file and initializing it on demand)
const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/destinations");
    console.log("DB connected");
  } catch (err) {
    console.log("DB connection error", err);
  }
};

// Initialize database connection
connectToDatabase();

// Export the Express app as a handler
module.exports = (req, res) => {
  app(req, res);
};
