/* 
  * ở bài trước, để test post req thì chúng ta phải tạo ra front end, và phải làm rất nhiều bước ở trong file JS mới có thể test đc 
  
  * bài này, chúng ta sẽ dùng POSTMAN để test http request

  * dùng postman để test các routes bên dưới

  ! test post req: vào postman, chỗ body chọn raw, type chọn json 
    {
      "name":"spy"
    }

    {
      "name":""
    }


*/

const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// *================================

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ success: false, msg: "Please provide name" });

  res.status(201).json({ success: true, data: [...people, name] }); // * add thêm thằng mới vào people, không cần id bởi vì db sẽ generate id cho chúng ta
});

// *================================

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ success: false, msg: "Please provide name" });

  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) return res.status(200).send(`Welcome, ${name}`);

  return res.status(401).send("Please provide credential");

  res.send("POST");
});

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
