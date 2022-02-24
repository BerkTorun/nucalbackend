const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    levelId: { type: String, required: true },
    description: { type: String, required: true },
    state: { type: Number, required: true },
    subtask:{type: Array, required: true},
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = { Task };
