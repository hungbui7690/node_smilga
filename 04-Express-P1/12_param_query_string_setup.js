const app = require("express")();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/api/products">Products</a>
  `); // ! khi click vào link (lúc chưa handle api/products) và vào Network tab > Response sẽ thấy html đc gửi trả lại
});

app.get("/api/products", (req, res) => {
  // ? https://react-projects.netlify.app/ >>> kiếm thằng Ecommerce: https://react-course-comfy-sloth-store.netlify.app/
  // * lúc này sẽ thấy rằng khi request data cho products thì chúng ta sẽ không request hết cả thông tin, mà chỉ lấy những thông tin mà chúng ta cần >> tới khi click vào detail mới thấy hết thông tin
  // res.json(products); // ! tức là không gửi kiểu này (tức là chứa tất cả thông tin)

  //! mà chúng ta sẽ làm kiểu này >> dùng map() để chỉ lấy ra những fields mà chúng ta cần
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.listen(5000, () => {
  console.log("Running...");
});
