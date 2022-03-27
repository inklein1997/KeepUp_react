const { Schema, model } = require("mongoose");

const List = require("./List");
const User = require("./User");
const Task = require("./Task");

const projectSchema = new Schema({
  projectName: {
    type: String,
    require: true,
    trim: true,
  },
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Project = model("Project", projectSchema, "Project");

module.exports = Project;
