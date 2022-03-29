const router = require("express").Router();
const { User, Project, UsersToProjects } = require("../models");

const createProject = async (req, res) => {
  try {
    const newProject = await Project.create({
      name: req.body.name,
      description: req.body.description
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
};

const linkProjectToUser = async (req, res) => {
  try {
    const userData = await User.findOne({
        where: { email: req.body.email },
    });
    const projectData = await Project.findOne({
        where: { id: req.body.projectId },
    });
    const newkey = await UsersToProjects.create({
      user_id: userData.id,
      project_id: projectData.id,
    });

    res.status(200).json(newkey);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteProject = async (req, res) => {
  try {
    const deleteRecord = await usersToProjects.destroy({
      where: {
        user_id: req.session.user_id,
        project_id: req.body.projectId,
      },
    });
    res.status(200).json(deleteRecord);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {linkProjectToUser, deleteProject, createProject};
