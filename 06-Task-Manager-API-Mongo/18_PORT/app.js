/*
 * bài này chúng ta sẽ work với phần 404 trong controller: ie.
 *  if (!task) return res.status(404).json({ msg: `No task with ID ${taskID}` });
 *
 * 1) task.js (controller) thêm vào next param >>> tạo new Error() >>> sửa trong file error.js
 *
 * 2) tạo error/custom-error.js >>> export sang cho thằng controller sử dụng
 *
 * 3) tạo middleware/error-handler.js
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

require("dotenv").config();

app.use(express.static("../public"));
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // *  Start Server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
