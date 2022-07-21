/* 
        ?  Informational responses (100–199)
        ?  Successful responses (200–299)
        ?  Redirection messages (300–399)
        ?  Client error responses (400–499)
        ?  Server error responses (500–599)

        * 200: OK
        * 201: Create
        * 401: Unauthorized
        * 403: Forbidden
        * 404 Not Found
        * 
        * 
  * Check thêm MIME Type MDN 
  *   text/plain, text/csv, text/html
  *   video/mp4
  *   .....
  */

const http = require("http");

const server = http.createServer((req, res) => {
  // * đây là gửi header tới cho browser, để browser biết nội dung mà chúng ta gửi đến là kiểu nào để có thể render cho đúng - 200 là status code
  // ! chỗ này rất quan trọng, bởi vì gửi sai tới sẽ display sai >> thử text/plain thay vì text/html sẽ thấy
  // * nếu dùng express thì không cần lo, do nó sẽ tự động hết cho chúng ta
  // * check http response status code - MDN

  res.writeHeader(200, { "content-type": "text/html" });

  res.write("<h1>Home Page</h1>");
  res.end();
});

server.listen(5000);
