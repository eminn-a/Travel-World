require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(auth);
app.use(routes);

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => console.log("DB connecteed"))
  .catch((err) => console.log(err));

app.listen(3030, () =>
  console.log("RESTful server is listening on port 3030...")
);
