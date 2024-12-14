const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2d" });
  const result = {
    _id: user._id,
    email: user.email,
    accessToken: token,
  };
  return result;
}

exports.getSingleUser = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new ApiException("User not found!", 404);
  }

  // const clone = JSON.parse(JSON.stringify(user));

  return user;
};
