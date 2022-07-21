/* 
  * expressjs.com
  ! npm install express --save  >>> lý do phải có --save flag là vì ở một số phiên bản nodejs trước đó, nếu không có flag này thì sẽ ko save vào package.json 
  
  * Cách cài đúng phiên bản: 
  ! npm install express@4.17.1
*/

// * 2 dòng dưới đây giống như http module, khi chúng ta require, rồi createServer() >> nhưng trong express là chạy function express
const express = require("express");
const app = express();

/*
 * app.get()
 * app.post()
 * app.put()
 * app.delete()
 * app.all(): work với tất cả method
 * app.use(): chịu tránh nhiệm về middleware
 * app.listen()
 */

// * callback sẽ bất bất cứ khi nào request tới đúng url này
// HOMEPAGE
app.get("/", (req, res) => {
  console.log("user hit the home page");
  // ! chúng ta cũng có thể chain method ở đây
  res.status(200).send("Home Page");
});

// ABOUT
app.get("/about", (req, res) => {
  res.status(200).send("About");
});

// 404
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not Found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
