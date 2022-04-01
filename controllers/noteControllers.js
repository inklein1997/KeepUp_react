const note = require("express").Router();
const { Note, User } = require("../models");

const getAllNotes = async (req, res) => {
  try {
    const noteData = await Note.findAll({
      where: {user_id: 1},
      include: [{ model: User }],
    });

    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createNote = async (req, res) => {
  try {
    const noteData = await Note.create({
      note_title: req.body.noteTitle,
      note_content: req.body.noteContent,
      user_id: req.body.userId,
    });
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateNote = async (req, res) => {
  try {
    console.log(req.session)
    const noteData = await Note.update(
      {
        note_title: req.body.noteTitle,
        note_content: req.body.noteContent,
        user_id: req.body.userId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!noteData) {
      res.status(404).json(`Note #${req.params.id} does not exist`);
    } else {
      res.status(200).json(noteData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteNote = async (req, res) => {
  try {
    const noteData = await Note.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!noteData) {
      res.status(404).json(`Note #${req.params.id} does not exist`);
    } else {
      res.status(200).json(`Note #${req.params.id} has been deleted`);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {getAllNotes, deleteNote, updateNote, createNote};
