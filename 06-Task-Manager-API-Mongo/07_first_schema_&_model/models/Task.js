const mongoose = require("mongoose");

// https://mongoosejs.com/docs/schematypes.html
// * chúng ta sẽ bắt đầu 1 cách đơn giản nhất có thể >>> sẽ không có một số options như trong docs
// * model là wrapper cho schema
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// * mongoose.model(name, Schema)
module.exports = mongoose.model("Task", TaskSchema); // ! ngay khi export thì chúng ta có thể vào controller và bắt đầu sử dụng Schema
