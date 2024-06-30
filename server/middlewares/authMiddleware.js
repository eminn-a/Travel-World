const jwt = require("jsonwebtoken");

// Use environment variable for secret key
const SECRET_KEY = process.env.JWT_SECRET || "default_secret_key";

exports.auth = (req, res, next) => {
  const token = req.header("x-Authorization");

  if (token) {
    try {
      const decodedToken = jwt.verify(token, SECRET_KEY);
      req.user = decodedToken;
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      res.status(401).json({
        message: "You are not authorized!",
      });
    }
  } else {
    res.status(401).json({
      message: "Token missing. You are not authorized!",
    });
  }
};
