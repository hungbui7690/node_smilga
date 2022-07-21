/*
 * instance của model là Document

  * nhưng properties mà chúng ta đã set trong Schema sẽ đc lưu vào db, nhưng thông tin khác không đc set thì sẽ bị ignore
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config(); // ! phải có dòng này

// Middleware
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

const port = 5000;

const start = async () => {
  try {
    // ! chỗ nào muốn dùng .env file thì: process.env.VAR_NAME
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
