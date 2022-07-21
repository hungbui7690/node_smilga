const path = require("path");

const express = require("express");
const app = express();

// * 2) đây là cách fix >> trong express, chúng ta không cần làm như http module >> tức là cần phải handle từng request 1 >> mà chỉ cần sử dụng app.use() để setup static files & middleware
// ! lúc này cần tạo public folder (tên folder ko cần thiết phải là public), rồi bỏ hết những thứ cần dùng vào đây là xong
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // ! 1) gửi file html bằng express (có thể sử dụng relative path, ko nhất thiết phải là abs path) >> lúc này vẫn báo lỗi thiếu file trong tab network: styles.css, logo.svg...
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {});

app.listen(5000, () => {
  console.log("Port 5000...");
});
