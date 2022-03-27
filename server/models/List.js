const { Schema, model } = require("mongoose");

const Task = require("./Task");

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
  ]
});

const List = model("List", listSchema, "List");

module.exports = List;
