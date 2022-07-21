const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
