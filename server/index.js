// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const routes = require("./routes");
// const { auth } = require("./middlewares/authMiddleware");

// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors());
// app.use(auth);
// app.use(routes);

// const uri = process.env.MONGO_URI;
// mongoose
//   .connect(uri)
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err));

// // Export the app to be used as a serverless function
// module.exports = (req, res) => {
//   // Set up Vercel's serverless function handler for the Express app
//   return new Promise((resolve, reject) => {
//     // Attach the Express app to the serverless function handler
//     const server = app.listen(() => {
//       resolve(server);
//     });
//     server.on("error", (err) => {
//       reject(err);
//     });
//   })(req, res);
// };
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = (req, res) => {
  app(req, res);
};
