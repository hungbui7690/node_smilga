const app = require("express")();
const morgan = require("morgan");

const logger = require("./16a_logger");
const authorize = require("./17a_authorize");

/* 
  * morgan npm: thằng này viết log >> npm i morgan >> check trong docs
  
  * morgan('tiny'): show only essential info trong log

*/

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Running...");
});
