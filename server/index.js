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

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connecteed"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3300;
console.log(PORT);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
