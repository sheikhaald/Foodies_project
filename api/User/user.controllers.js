const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, "mySuperSecretPrivateKey", {
    expiresIn: "5d",
  });
};

exports.CreateUser = async (req, res, next) => {
  try {
    req.body.password = await hashPassword(req.body.password);
    const newUser = await User.create(req.body);
    const token = generateToken(user);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.UpdateUser = async (req, res, next) => {
  try {
    await User.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const token = generateToken(req.user);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
