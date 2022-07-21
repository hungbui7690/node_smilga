/*
 * Nếu check trong final/ thì sẽ thấy rằng chúng ta cần get để lấy ra tất cả tasks, post để create, cũng như put và delete

  * app.get('api/v1/tasks')               - get all tasks
  * app.post('api/v1/tasks')              - create a new task
  * app.get('api/v1/tasks/:id')           - get single task
  * app.patch('api/v1/tasks/:id')         - update task
  * app.delete('api/v1/tasks/:id')        - delete task
  * 
  * 
  * https://hn.algolia.com/api      check trong đây để xem convention về api
 */

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
