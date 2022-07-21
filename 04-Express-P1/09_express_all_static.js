const path = require("path");

const express = require("express");
const app = express();

app.use(express.static("./public"));

/* 
  ! chúng ta cũng có thể để file index.html vào public/ để dùng như static file 

  ! sau này, chúng ta sẽ học về SSR (Server Side Rendering: ví dụ như sẽ hiện tên theo từng user login vào app, chứ ko phải set static nữa) bằng cách sử dụng template 
*/
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all("*", (req, res) => {});

app.listen(5000, () => {
  console.log("Port 5000...");
});
