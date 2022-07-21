/*
 * https://mongoosejs.com/docs/queries.html
 ! A query also has a .then() function, and thus can be used as a promise.
 ! Mongoose queries are not promises. They have a .then() function for co and async/await as a convenience. However, unlike promises, calling a query's .then() can execute the query multiple times.
 
 * bài này sẽ làm getAllTasks() và getTask() (thằng này dùng trong trường hợp khi chúng ta nhấn vào nút edit để edit info)
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();

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
