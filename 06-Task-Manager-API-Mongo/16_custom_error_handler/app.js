/*
  * https://expressjs.com/en/guide/error-handling.html >>> check default handler >>> If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace. The stack trace is not included in the production environment. >>>> sau đó check "Writing Error Handlers"

  * 1) middleware/error.js
  * 2) app.use() 
  * 
  * Nhờ thằng next() trong async.js mà chúng ta có thể nhảy tới errorHandler đc
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error");

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
