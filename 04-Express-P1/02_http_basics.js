/* 
  * PORT: communication endpoint 
  *   20: data transfer
  *   80: hypertext
  !   443: secure commuication >> đây là lý do các web có https chúng ta vào và check trong network tab sẽ thấy là port 443

*/

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit server"); // ! ở thời điểm này nếu browser request tới server thì vẫn log ra đc, nhưng ở browser sẽ loading do chưa có response >> thiếu res.end()

  res.end("home page");
});

server.listen(5000);
