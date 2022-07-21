/* 
  * Middleware: đơn giản chỉ là functions đc thực thi ở thời điểm khi request tới server. Middleware functions có thể access tới request và response object

  * Middleware là hear & soul của express >> xuất hiện ở mọi nơi

  ! request >>>> MIDDLEWARE >>> response
  ! nằm giữa 
*/

const app = require("express")();

//*====================================

// ! 3) khi bỏ thằng logger vào 2) thì lúc này có thể access tới req, res, và next()
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  next(); //! 4) nếu thiếu thằng này thì sẽ bị hang khi refresh lại home page >> lý do là khi pass middleware vào app.get(), sau khi chạy middleware xong sẽ ko biết chạy gì tiếp theo. Bởi vì chúng ta có thể access tới response object ở đây, chúng ta cũng có thể chạy res.send() để gửi response về có client trong trường hợp ko có next()

  // res.send("MIDDLEWARE"); // ! 5) đây là trường hợp ko có next()

  // ! thông qua 4) và 5), chúng ta có thể thấy rằng middleware chạy trước thằng bên trong app.get()
};

// * 2) bỏ middleware nằm giữa route và callback >> app.get(url, middleware, cb)
app.get("/", logger, (req, res) => {
  // const method = req.method;
  // const url = req.url;
  // const time = new Date().getFullYear();
  // console.log(method, url, time); // ! 1) lúc này, mỗi khi user hit / thì sẽ log ra mấy thằng này >> tức là nếu đứng ở homepage và refresh liên tục thì sẽ log liên tục >>> Hiện tại nếu muốn làm y chang ở /about thì copy và paste >>> nhưng nếu có 15 routes hoặc hơn thì sao? >>> setup function (ở trên: logger())

  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

// ! hiện tại thằng logger() nằm chung 1 file >>> phải làm cách nào để move nó ra 1 file khác >>> bài sau

//*====================================

app.listen(5000, () => {
  console.log("Running...");
});
