require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");
const encodeURIComponent = require("querystring").escape;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(auth);
app.use(routes);

const user = encodeURIComponent(process.env.DB_USER);
const pass = encodeURIComponent(process.env.DB_PASS);
const host = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

// mongoose
//   .connect(`mongodb://${user}:${pass}@${host}/${dbName}`)
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err));

app.listen(3030, () =>
  console.log("RESTful server is listening on port 3030...")
);

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${user}:${pass}@${host}/?retryWrites=true&w=majority&appName=${dbName}`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
