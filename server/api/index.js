require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("../routes"); // Adjust path as necessary
const { auth } = require("../middlewares/authMiddleware"); // Adjust path as necessary

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(auth);
app.use(routes);

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// Export the app as a serverless function handler
module.exports = (req, res) => {
  return new Promise((resolve, reject) => {
    // Create an instance of the Express app for handling requests
    const server = app(req, res);
    resolve(server);
    server.on("error", (err) => {
      reject(err);
    });
  });
};
