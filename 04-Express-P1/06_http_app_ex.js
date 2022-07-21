const http = require("http");
const { readFileSync } = require("fs");

// ! sử dụng starter file >> nhưng lúc này load lên lại chạy không ra đúng >> mất css và js và hình >>>>> lúc này vào network tab sẽ thấy báo lỗi 404 >> lý do là vì trong file html đã reference tới những file này để chạy, nhưng chúng ta chưa import nó vào app của chúng ta >>>> tóm lại, những file này nằm trong server của chúng ta, nhưng chúng ta chưa handling những request này, chỉ mới handle /, /about, /404
const homePage = readFileSync("./navbar-app/index.html");

// ! lưu ý: nhớ copy trong thư mục public/ vào thư mục navbar-app
// * import mấy thằng thiếu ở đây
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  // HOME
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }

  // ABOUT
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }

  // * ============================================

  // * STYLE
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }

  // * IMAGE
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }

  // * JS
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }

  // * ============================================

  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
});

server.listen(5000);
