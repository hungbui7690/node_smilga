const http = require("http");

// * req = request, res = response
const server = http.createServer((req, res) => {
  res.write("Welcome to our Homepage");
  res.end();
});

server.listen(5000); // ! lúc này vào browser >> localhost:5000
