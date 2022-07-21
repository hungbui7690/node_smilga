const mongoose = require("mongoose");

// * =================================================

// ! thêm validation ở đây
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    required: [true, "must provide name"], // ! nếu muốn có message thì thêm array vào
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// * =================================================

module.exports = mongoose.model("Task", TaskSchema);
