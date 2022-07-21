/*
 * POSTMAN:
 * 1) Create New Collection
 * 2) Setup Global Variable: chọn con mắt góc phải trên >>> Global >> Add >>>> Init Value = localhost:5000/api/v1 >>>>> sau khi setup xong, để sử dụng thì dùng {{variable}}
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");

// Middleware
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
