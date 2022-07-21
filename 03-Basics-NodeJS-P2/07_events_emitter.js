/* 
  * khi làm việc với JS, chúng ta thường hay handle event ở front end >> user click button, hover mouse .... 

  * tương tự, khi work với backend cũng phải handle event

  * on() phải nằm trước emit()
*/

// ? lưu ý: phải viết hoa vì đây là class
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// * on: listen for an event
// * emit: emit an event

// * .on(nameOfEvent, cb)
customEmitter.on("response", (name, id) => {
  console.log("Data Received: " + name + " " + id);
});

// ! chúng ta cũng có thể listen tới event nhiều lần
customEmitter.on("response", () => {
  console.log("Some other Logic Here");
});

// * tên phải match với thằng .() ở trên >> emit() phải nằm dưới on() >> nếu nằm trên sẽ ko chạy
customEmitter.emit("response", "joe", 34);
