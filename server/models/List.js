const { Schema, model } = require("mongoose");

const Task = require("./Task");
const User = require("./User")

const listSchema = new Schema({
  listTitle: {
    type: String,
    require: true,
  },
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

const List = model("List", listSchema, "List");

module.exports = List;
