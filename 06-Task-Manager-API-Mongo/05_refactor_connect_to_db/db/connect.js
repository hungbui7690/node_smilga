const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://hungbui7690:2e7etrEp@nodeexpressprojects.gs5rils.mongodb.net/TaskManager?retryWrites=true&w=majority";

// ! lưu vào hàm
const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
