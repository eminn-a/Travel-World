const serverless = require("serverless-http");
const app = require("../server/index"); // Adjust path as needed

module.exports.handler = serverless(app);
