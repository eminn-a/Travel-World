const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const user = await User.create(userData);
  console.log(user);
  const result = getAuthResult(user);
  return result;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invailid email or password");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invailid email or password");
  }

  const result = getAuthResult(user);
  return result;
};

function getAuthResult(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, "SECRETSECRET", { expiresIn: "2d" });
  const result = {
    _id: user._id,
    email: user.email,
    accessToken: token,
  };
  return result;
}
