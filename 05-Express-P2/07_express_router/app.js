/* 
  * Nếu xem ở bài trước thì có thể thấy rằng mặc dù chúng ta không có nhiều routes, nhưng file của chúng ta đã trở nên rất phức tạp >>> solution: sử dụng express router + separated controller

  * bài này chúng ta sẽ refactor code của bài 06 

  * 1) tạo thư mục routes/
  * 2) trong thư mục routes/ >>> tạo file để quản lý people và auth (cho login)
  * 3) copy code của /api/people vào people.js, vào /login vào auth.js
  * 4) export people.js ra
  * 5) trong app.js sử dụng app.use() để setup base >>> trong people sẽ phải bỏ đi phần base
  * 
*/

const express = require("express");
const app = express();

const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../methods-public"));

// ! setup base ở đây là /api/people thì bên people.js sẽ bỏ phần /api/people đi
app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
