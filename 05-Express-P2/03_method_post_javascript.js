/* 
  * methods-public/javascript.html (trong đây có html và js dùng để get và post http req) >>> chúng ta sẽ sử dụng axios để thực hiện http requests với JS thay vì sử dụng browser

  * thông thường, khi chúng ta vào một trang web nào đó là chúng ta đã thực hiện GET request tới server >>> bài này, chúng ta sẽ không sử dụng browser, mà sử dụng Javascript (axios) để test GET request

  ! http://localhost:5000/javascript.html >> vào đây để test >> cẩn thận sai port
*/

const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json()); // ! phải có dòng này thì chỗ app.post("/api/people", (req, res) mới có thể access tới req.body đc

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// *===================================

// * đây là sử dụng http request với frontend (axios)
// ! 1) phải có thằng này nếu không thằng Javscript.html file sẽ ko handle đc
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ success: false, msg: "Please provide name" });

  // res.status(201).send({ success: true, person: name }); // ? lúc này khi submit sẽ ko thấy thay đổi >> vào network tab và check xem có file people với status 201 hay không (Content-Type: application/json;charset=UTF-8 >> đây là do axios tự động làm cho chúng ta)

  res.status(201).json({ success: true, person: name }); // ! trước đó chúng ta sử dụng res.send() >>> giờ chuyển thành res.json()
});

// * đây là sử dụng form
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) return res.status(200).send(`Welcome, ${name}`);

  return res.status(401).send("Please provide credential");

  res.send("POST");
});

// ! sau bài này, chúng ta sẽ cài và sử dụng postman để test, chứ không cần phải dùng axios để test http req nữa

// *===================================

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
