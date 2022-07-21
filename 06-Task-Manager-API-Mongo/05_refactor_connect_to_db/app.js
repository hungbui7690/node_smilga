/*
 *  Hiện tại nếu nhìn trong log thì thấy rằng: Server is listening on port 5000.. >>> Connected to DB.... >>>> điều này không đúng lắm >>> phải Connect vào DB thành công thì mới Start Server
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect"); // ! lúc này lưu vào biến

// Middleware
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

const port = 5000;

const start = async () => {
  try {
    // * hiện tại sẽ hardcode url, nhưng sau này sẽ lấy ra tự .env file
    await connectDB();
    // *  Start Server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
