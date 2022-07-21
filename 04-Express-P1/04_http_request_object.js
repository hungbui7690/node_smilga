const http = require("http");

const server = http.createServer((req, res) => {
  // *===========================
  // console.log(req); // ! rất rất nhiều thông tin trong đây
  // console.log(req.method);
  // console.log(req.url);

  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    // ! 404 >> lúc này status code sẽ ko giống như lúc trước
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }

  // *===========================
});

server.listen(5000);
