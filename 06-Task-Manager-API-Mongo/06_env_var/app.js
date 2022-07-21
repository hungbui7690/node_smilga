/*
 * Bây giờ nếu up lên Github thì ai cũng có thể access vào DB của chúng ta và chỉnh sửa data trong đó bởi vì connection string bị show ra bên ngoài 

  ! package: dotenv  >>>> giúp chúng ta giữ bị mật 1 số thông tin mà chúng ta không muốn up lên >>> .gitignore: .env (nhớ phải có dấu .)
  
  * 1) cài package
  * 2) tạo .env
  * 3) chỗ nào muốn access tới thì require('dotenv').config()
  * 4) process.env.VAR_NAME

  * bỏ hết connection string vào .env 
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
