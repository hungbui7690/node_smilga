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

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);

  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (singleProduct) res.json(singleProduct);
  else return res.status(404).send("<h1>NO Product with that ID</h1>");
});

// * ============================================
// ? có thể dùng URL để gửi đi thông tin >>> nhưng không gửi những thông tin lớn, chỉ có thể gửi đi những thông tin nhỏ >>> ví dụ như param để query a db, hoặc filter results
// ? https://hn.algolia.com/api >> ví dụ trong đây: http://hn.algolia.com/api/v1/search?query=foo&tags=story >> trong đây còn chứa một số format url link nếu chúng ta muốn tham khảo >> đây cũng là 1 project mà chúng ta sẽ làm trong react course

app.get("/api/v1/query", (req, res) => {
  console.log(req.query); // ! trả về object >>> http://localhost:5000/api/v1/query?search=a&limit=4 >>> thông tin đc thêm sau thằng query? >>> ngăn cách nhau bằng dấu ?

  const { search, limit } = req.query;
  let sortedProducts = [...products]; // * sort sẽ mutate >> phải copy

  // ! http://localhost:5000/api/v1/query >>> nếu user enter url này thì sẽ return full products
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1)
    // return res.status(200).send("<h1>NO Product matched</h1>");
    return res.status(200).json({ success: true, data: [] }); // ! nếu không có return ở đây thì sẽ bị lỗi >>> bởi vì chúng ta response 2 lần (1 thằng ở đây, và 1 thằng bên dưới), trong khi với 1 req thì chúng ta chỉ có thể res 1 lần

  res.status(200).send(sortedProducts);
});

// * ============================================

app.listen(5000, () => {
  console.log("Running...");
});
