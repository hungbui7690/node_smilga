const app = require("express")();

// ! 1) đem thằng function sang file khác để dễ quản lý
const logger = require("./16a_logger"); // * phải có export và import

// ! 2) nếu có nhiều routes, mà mỗi routes chúng ta đều muốn add middleware như vậy thì rất bất tiện >>> sử dụng app.use()
app.get("/", (req, res) => {
  res.send("Home");
});

// * 3) sau khi add thằng này vào thì không cần thiết phải thêm middleware vào từng thằng như trước nữa >>>> mỗi routes sẽ tự invoke thằng logger()
// ! khi sử dụng app.use() phải lưu ý: a) thằng này chỉ chạy với những thằng sau nó >>> nếu để app.use() dưới thằng app.get("/", (req, res) thì thằng / sẽ ko có logger
// app.use(logger); // ! sẽ apply cho mọi thằng (vì không có path)
app.use("/api", logger); // ! b) app.use(path or base, middleware) >>> lúc này chỉ apply cho những thằng có path là api/ >>> trả về /products hoặc /items, base (path) sẽ không đc trả về

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

//*====================================

app.listen(5000, () => {
  console.log("Running...");
});
