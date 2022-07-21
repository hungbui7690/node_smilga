/* 
  * REST API: giống như 1 pattern bao gồm http verbs + route paths + resouces (data)

  ? Ví dụ về REST API
  * GET           api/tasks         - get all tasks
  * POST          api/tasks         - create task
  * GET           api/tasks/:id     - get task   
  * Put/Patch     api/tasks/:id     - Update Task
  * DELETE        api/tasks/:id     - Delete Task
  * ....
  * 
  * REST determines how API looks like >>> nói chung chúng ta không bắt buộc phải làm theo kiểu này >>> nhưng làm theo kiểu này sẽ dễ hiểu hơn 
  * Nếu chọn pattern nào, thì stick with it >>> không thì users sẽ khó trong việc sử dụng API của chúng ta 
  * Hiện tại chúng ta sử dụng res.send(), nhưng sau này sẽ chuyển tất cả thành res.json() để gửi json lại 
  * Thông thường API sẽ build xung quanh CRUD
  * 
  * 
  * 
  * 
  * MongoDB: No SQL, Non Relational DB 
  * Store JSON
  * Easy to Get Started
  * Free Cloud Hosting (Atlas)
  * 
  * Table = Collection
  * Row = Document >>> Key:Value Pair
  * 
  * 
  ? Atlas Setup
  * https://www.mongodb.com/docs/atlas/getting-started/
  * 1) Tạo account
  * 2) Tạo Cluster
  * 3) Config:
  *     - Database Access >>  Tạo User trong đây
  !     - Network Access >> làm ở local nên chọn cái nào cũng đc >>> nhưng sau này trên production, trong trường hợp này là Heroku thì phải chọn "Access from Anywhere" >>> Nếu là host khác (Digital Ocean) ip sẽ đc swap khi bỏ lên production
  * 4) Lấy Connection String: Database >> Connect >> Connect Your Application >> Copy Connection String >>> Sau này sẽ setup trong Environment, nhưng hiện tại sử dụng trực tiếp trong db/connect.js
  * 


  * Tạo Dummy Collection trước, rồi vào NodeJS app connect tới db sẽ tạo ra Collection mà chúng ta muốn >>> DB Name Store, Collection = Products
  *       - Mỗi Document là 1 Single Item
  *       - Điều đặc biệt của mongodb là mỗi collection không nhất thiết phải giống nhau.
  *                 {
  *                   name:testing,
  !                   type:testing
  *                 }
  * 
  *                 {
  *                   name:testing,
  !                   color:[red, blue]
  *                 }
  *       - Mặc dù chúng ta có thể làm như vậy, nhưng không nên >>>> sẽ học Mongoose >>> tạo ra structure cho chúng ta
  * 
  * 
  * 
  * 
  ? Mongoose
  * Giờ đã có db >>>> có thể connect tới sử dụng native package MongoDB, nhưng popular là sử dụng Mongoose (Object Data Modelling Library) >>> sử dụng thằng này bởi vì nó có rất nhiều APIs hỗ trợ hết cho chúng ta 
*/

require("./db/connect"); // ! không cần lưu vào biến
const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");

// Middleware
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
