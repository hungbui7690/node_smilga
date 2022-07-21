/*
 * có rất nhiều cách để response, hiện tại: res.status(200).json({ tasks });

 * một số response thường thấy
  ?  res.status(200).json({tasks, amount: tasks.length})
  ?  res.json(200).json({success:true, data: {tasks, nbHits: tasks.length}})
  ?  res.json(200).json({status: "success/failed/error", data: {tasks, nbHits: tasks.length}})

 * sở dĩ chúng ta sử dụng cách hiện tại là vì front end >>> ở front end chúng ta dùng axios để lấy ra data >>> nếu ko success thì ko lấy đc >>> status sẽ bị dư 
    * ngoài ra, thằng axios đã có property data rồi, nên không cần thiết phải thêm data nữa



 ! NOT FOUND
 * nếu bây giờ vào localhost:5000/api/v1/hello >>>> Cannot GET /api/v1/hello >> đây là default, và chúng ta muốn custom
 * tạo middleware/not-found.js >>> export ra >>> xong qua app.js sử dụng app.use() 
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
