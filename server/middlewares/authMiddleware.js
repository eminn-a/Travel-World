const jwt = require("jsonwebtoken");

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
