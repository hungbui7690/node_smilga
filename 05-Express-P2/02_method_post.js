const express = require("express");
const app = express();
let { people } = require("./data");

// *====================================

// ? static asset
app.use(express.static("./methods-public")); // ! 1) sau khi sử dụng static này thì vào homepage sẽ thấy form >>> giúp chúng ta test post request >>> bởi vì hiện tại chúng ta chưa cài postman hoặc insomnia nên chưa thể test post request trực tiếp đc nên phải dùng form để test

/*
 * chúng ta có thể test post bằng JS hoặc Postman >> check file html trong methods-public/ sẽ thấy form có method=post và action=/login >>> hiện tại vì chưa handle post cho /login nên vào route này sẽ ko ra (Cannot POST /login) >> và check trong Network tab sẽ thấy Request Method= POST >>>> kéo xuống dưới cùng sẽ thấy Form Data, và trong đó sẽ thấy key:value pair mà chúng ta đã enter trong form >>> và thằng key này là attribute "name" trong file html
 */

// * để lấy đc thông tin mà user gửi tới server >>> phải dùng middleware >>> check express.urlencoded() docs
app.use(express.urlencoded({ extended: false })); // ! nếu không có thằng này thì khi req.body=undefined

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) return res.status(200).send(`Welcome, ${name}`); // * check Content-Type: app/form-urlencoded >>> ở bài sau thằng này sẽ khác

  return res.status(401).send("Please provide credential");

  res.send("POST");
});

// *====================================

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
