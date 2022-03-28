const { User } = require("../models");

const getSingleUser = async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const userData = await User.create({
        first_name: req.body.firstName,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const userData = await User.update(
      {
        first_name: req.body.firstName,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (!userData) {
        res.status(404).json("There is no user with that id")
    } else {
        res.status(200).json(userData)
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {updateUser, createUser, getSingleUser};
