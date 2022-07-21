/* 
  * https://course-api.com/ >> vào để xem demo của các API mà chúng ta sẽ build sau này

  * sau này, học khóa react, sẽ sử dụng data này để build projects >> không nhất thiết phải là react, có thể sử dụng vanilla JS để fetch data và build app
*/

const app = require("express")();
const { products, people } = require("./data"); // ! data nằm trong file này

app.get("/", (req, res) => {
  // * check trong docs >> res.json(): phần Response
  // * Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().
  // res.json([{ name: "joe", age: 20 }, { name: "susan" }]); // ! lúc này chúng ta đã có data trên server >> vào localhost:5000 để access tới data này và có thể build bất cứ gì với data này >>> nếu vào network và check thì sẽ thấy content-type = application/json
  res.json(products);
});

app.listen(5000, () => {
  console.log("Running...");
});
