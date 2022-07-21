/*
 * hiện tại chưa có validation >>> có thể insert {} vào db
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();

// Middleware
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
