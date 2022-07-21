var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");

    // ! setup sẽ khác khi chúng ta read stream >> lúc này nếu check trong network thì sẽ thấy Transfer-Encoding = chunked
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", () => {
      res.end(err);
    });
  })
  .listen(5000);
