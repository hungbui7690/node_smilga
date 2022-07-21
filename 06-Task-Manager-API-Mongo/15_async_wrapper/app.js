/*
 * trong controller, rất nhiều try/catch >>> redundant >>>> cách giải quyết là tạo ra middleware function >>>> có rất nhiều packages sẽ giúp chúng ta làm việc này >>>> và ở những project tiếp theo chúng ta sẽ dùng tới chúng

  * 1) tạo middleware/async.js >>> export cho thằng controller xài 
  * 2) trong controller >>> wrap asyncWrapper 
 */

const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found"); // ! 2)

require("dotenv").config();

app.use(express.static("../public"));
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

app.use(notFound); // ! 3)

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
