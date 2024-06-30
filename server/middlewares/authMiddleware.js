const jwt = require("jsonwebtoken");

// Use environment variable for secret key
const SECRET_KEY = "default_secret_key";

exports.auth = (req, res, next) => {
  const token = req.header("x-Authorization");

  if (token) {
    try {
      const decodedToken = jwt.verify(token, "SECRETSECRET");
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).json({
        message: "You are not authorized!",
      });
    }
  } else {
    next();
  }
};
