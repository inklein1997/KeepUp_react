const { User } = require("../models");
const { ObjectId } = require("mongoose");

const getSingleUser = async (req, res) => {
  try {
    const userData = await User.find().select("-password");
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const userData = await User.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { updateUser, createUser, getSingleUser };
