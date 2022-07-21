/*
 *  PUT: replace the whole resource
 *  PATCH: partial update
 *
 * Ví dụ: Body = {name:shakeandbake}
 * >>> Patch: sẽ chỉ update name, những properties khác sẽ đc giữ nguyên
 * >>> Put: update toàn bộ
 *
 * Chúng ta sẽ tạo 1 ví dụ về put >>> editTask(): thằng này sẽ y chang thằng updateTask(), chỉ khác là có thêm 1 option >>> overwrite:true
 * Trong real life, chúng ta đôi lúc sẽ thấy put và patch, nhưng same functionality (patch)
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();

app.use(express.static("../public")); // ! add front-end
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

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
