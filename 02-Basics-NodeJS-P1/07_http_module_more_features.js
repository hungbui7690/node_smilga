const http = require("http");

/* 
  * hiện tại nếu vào localhost:5000/about, vẫn ra content giống như homepage

*/

const server = http.createServer((req, res) => {
  // * chúng ta quan tâm tới req.url
  // console.log(req); // ? refresh browser

  // * res.end('data') là viết tắt cho 2 dòng res.write('data') và res.end()
  if (req.url === "/") {
    res.write("Welcome to our Homepage");
    return res.end();
  }
  if (req.url === "/about") {
    return res.end("About Page");
  }

  /* 
  * default response (error page): dùng trong trường hợp user request tới url mà chúng ta ko có
  ! lưu ý: phải có từ khóa return >> nếu ko đôi khi thằng res.end() chạy 2 lần sẽ báo lỗi
  ? ngoài ra, chỗ thẻ a, href phải để là /, chứ không phải là localhost:5000
   */
  return res.end(`
    <h1>Oops!</h1>
    <p>No page avalable!!</p>
    <a href="/">Back to Homepage</a>
    `);
});

server.listen(5000);
