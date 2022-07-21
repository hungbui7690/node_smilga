const app = require("express")();
const { response } = require("express");
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/api/products">Products</a>
  `);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

// *======================================
// ! /api/products/"1" >>> không làm kiểu này bởi vì hiện chúng ta chỉ có 4 products, nhưng nếu sau này có 1000 products thì sao? >>>> sử dụng param
// app.get("/api/products/1", (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1);

//   res.json(singleProduct);
// });

// * đây là cách làm đúng >> sử dụng param
app.get("/api/products/:productID", (req, res) => {
  console.log(req.params); // ! đây là nơi chứa param >> nằm trong request object

  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID) //! nhớ phải convert sang #, bởi vì nếu để string sẽ ko ra
  );

  // ! nếu productID = abc : sai >>> singleProduct lúc này sẽ ra undefined
  if (singleProduct) res.json(singleProduct);
  else return res.status(404).send("<h1>NO Product with that ID</h1>");
});

// ! có thể có nhiều params
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params); // * { productID: '2', reviewID: '45' }

  res.send("Hello World");
});
// *======================================

app.listen(5000, () => {
  console.log("Running...");
});
