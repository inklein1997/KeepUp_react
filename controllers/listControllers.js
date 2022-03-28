const list = require("express").Router();
const { List, Task } = require("../models");

const getAllLists = async (req, res) => {
  try {
    const listData = await List.findAll({
      include: [{ model: Task }],
    });
    res.status(200).json(listData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createList = async (req, res) => {
  try {
    const listData = await List.create({
      list_content: req.body.listContent,
      position: req.body.position,
      project_id: req.body.project_id,
    });
    res.status(200).json(listData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateList = async (req, res) => {
  try {
    const listData = await List.update(
      {
        list_content: req.body.listContent,
        position: req.body.position,
        project_id: req.body.project_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!listData) {
      res.status(404).json("There is no list associated with that ID");
    } else {
      res.status(200).json(listData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteList = async(req, res) => {
  try {
    const listData = await List.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!listData) {
      res.status(404).json(`There is no list associated with that ID`);
    }
    res.status(200).json(`list #${req.params.id} has been deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {deleteList, createList, getAllLists, updateList};
