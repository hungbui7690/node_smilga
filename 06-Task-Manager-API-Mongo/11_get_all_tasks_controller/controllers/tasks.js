const Task = require("../models/Task");

// * ========================================

const getAllTasks = async (req, res) => {
  try {
    // ? FIND ALL >>>> {}: không có filter
    const tasks = await Task.find({});
    res.json({ tasks }); // * key và value giống nhau
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// * ========================================

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// * ========================================

// ! chúng ta có 2 error: 1 loại là No task with ID: ${taskID}, 1 loại là error >>>> loại no task là id bị sai (vẫn same characters, nhưng chúng ta sửa số cuối) >>> loại thứ 2 là nếu thiếu # of characters (wrong syntax) trong ID thì sẽ là error
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; // ! des id ra từ req.params.id, đồng thời đổi tên thành taskID
    const task = await Task.findOne({ _id: taskID });
    if (!task)
      return res.status(404).json({ msg: `No task with ID: ${taskID}` });

    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

// * ========================================

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
