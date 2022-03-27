const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  noteTitle: {
    type: String,
    require: true,
  },
  noteContent: {
    type: String,
    require: true,
  },
});

const Note = model("Project", noteSchema, "Project");

module.exports = Note;
