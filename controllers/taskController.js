const router = require("express").Router();
const { Task } = require("../models");

const getTasks = async (req, res) => {
  try {
    const taskData = await Task.findAll();
    res.status(200).send(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addTask = async (req, res) => {
  try {
    const taskData = await Task.create({
      task_content: req.body.taskContent,
      list_id: req.body.listId,
    });
    res.status(200).send(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const taskData = await Task.update(
      {
        task_content: req.body.taskContent,
        list_id: req.body.listId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!taskData) {
      res.status(404).send(taskData);
    } else {
      res.status(200).json(taskData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: { id: req.params.id },
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { updateTask, addTask, getTasks, deleteTask };
