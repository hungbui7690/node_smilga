const app = require("express")();

const logger = require("./16a_logger");
const authorize = require("./17a_authorize");

app.use([logger, authorize]); // ! 1) lưu ý: thứ tự rất quan trọng >>> nếu để vậy thì logger sẽ chạy trước authorize

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

// ! 4) có thể add 2 middlewares trực tiếp trong đây vẫn đc >> có thể chọn sử dụng app.use() hoặc viết trực tiếp trong app.get()
app.get("/api/products", [logger, authorize], (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user); // ! 3) có thể access tới req.user sau khi đã add trong 17a
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Running...");
});
