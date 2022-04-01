const { restart } = require("nodemon");
const { User, Project } = require("../models");

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
      last_name: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
    });
    req.session.save(() => {
      req.session.first_name = userData.first_name;
      req.session.last_name = userData.last_name;
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json("You are logged in");
    });
    console.log(req.session)
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
      res.status(404).json("There is no user with that id");
    } else {
      res.status(200).json(userData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userData) {
      res.status(404).json("There is no user associated with that email");
      return;
    }
    const checkPassword = await userData.checkPassword(req.body.password);

    if (!checkPassword) {
      res.status(403).json("Incorrect password");
      return;
    }

    req.session.save(() => {
      req.session.first_name = userData.first_name;
      req.session.last_name = userData.last_name;
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json("You are logged in");
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userData = await User.destroy({
      where: { id: req.body.params },
    });
    if (!userData) {
      res.status(404).json("There is no user associated with that email");
      return;
    }
    res.status(200).json("User deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

const logoutUser = async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
};

const getProjects = async (req, res) => {
  try {
    const projectData = await User.findByPk(1, {
      attributes: {exclude: ["password"]},
      include: [{model: Project}]
    })
    if (!projectData) {
      res.status(404).json('Cannot find data.  Please verify id')
      return
    }
    res.status(200).json(projectData)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  updateUser,
  createUser,
  getSingleUser,
  loginUser,
  deleteUser,
  logoutUser,
  getProjects
};
