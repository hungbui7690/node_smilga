const http = require("http");

// ! sử dụng sync là bởi vì chúng ta ko invoke hàm này liên tục, mà chỉ chạy đúng 1 lần duy nhất khi chúng ta initialize server của chúng ta
const { readFileSync } = require("fs");

// ! lưu ý: nhớ copy trong thư mục public/ vào thư mục navbar-app
// * get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    // ! lúc này chúng ta thay vì viết html thì sẽ truyền homePage vào đây
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
});

server.listen(5000);
