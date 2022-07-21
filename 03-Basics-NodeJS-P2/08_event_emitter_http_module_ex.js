const http = require("http");

// * ====================================
// ! không cần cb ở trong createServer()
const server = http.createServer();

// * Sử dụng Event Emitter ở server
// ? https://nodejs.org/docs/latest-v15.x/api/http.html#http_event_request

server.on("request", (req, res) => {
  res.end(`Welcome`);
});

// * ====================================

server.listen(5000, () => {
  console.log(`Server is running on port 5000...`);
});
