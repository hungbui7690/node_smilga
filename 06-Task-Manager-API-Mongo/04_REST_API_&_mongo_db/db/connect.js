const mongoose = require("mongoose");

// ! nhớ thêm dbname vào (trong trường hợp này là TaskManager)
const connectionString =
  "mongodb+srv://hungbui7690:2e7etrEp@nodeexpressprojects.gs5rils.mongodb.net/TaskManager?retryWrites=true&w=majority";

// * Connect vào DB >> chỉ vậy là đủ
// mongoose
//   .connect(connectionString)
//   .then(() => console.log("Connected to DB...."))
//   .catch((err) => console.log(err));

// ! để xóa đi deprecation warning >>> thêm 1 số options vào
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB...."))
  .catch((err) => console.log(err));
