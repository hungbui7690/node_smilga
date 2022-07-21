// * ở ví dụ trước chúng ta dùng dòng for để tạo big.txt >> set = 10k >> lúc này tăng lên thành 100k

// ! ở trường hợp này, chúng ta đã read đc file big.txt thành công, nhưng rất tốn thời gian (browser loading rất lâu) >> và khi vào network tab (All) thì thấy rằng nó download nguyên 1 file chứ không chia nhỏ ra để download >> nếu click vào file này trong network tab và kéo xuống >> content-length sẽ thấy rõ lenght >> ko send dưới dạng chunk mà send nguyên file

var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    const text = fs.readFileSync("./content/big.txt", "utf8");
    res.end(text);
  })
  .listen(5000);
