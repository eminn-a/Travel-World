const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(auth);
app.use(routes);

const uri = "mongodb://127.0.0.1:27017/destinations";
mongoose
  .connect(uri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3030;
console.log(process.env.PORT);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
