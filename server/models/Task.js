const { Schema, model } = require("mongoose");

const User = require("./User");

const taskSchema = new Schema({
  taskTitle: {
    type: String,
    require: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Task = model("Task", taskSchema, "Task");

module.exports = Task;
