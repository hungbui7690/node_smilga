/* 
  * Hiện tại, mọi thứ nhìn ok, nhưng file people.js nhìn vẫn rất rối, trong khi file auth.js thì nhìn rất đơn giản >> phải chia controller ra cho gọn hơn nữa

  * bởi vì thằng /login nhìn gọn, nên không cần phải làm nó, mà sẽ phải làm controller cho thằng people


*/

const express = require("express");
const app = express();

const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../methods-public"));

// ! setup base ở đây là /api/people thì bên people.js sẽ bỏ phần /api/people đi
app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
