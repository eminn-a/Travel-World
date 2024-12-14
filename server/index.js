require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "https://travel-world-c12.web.app",
  })
);
app.use(auth);
app.use(routes);

const uri = "mongodb://127.0.0.1:27017/destinations";
const mongoDBURI = process.env.MONGO_URI || uri;
mongoose
  .connect(mongoDBURI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3030;
console.log(process.env.PORT);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
