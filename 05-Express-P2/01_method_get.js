const express = require("express");
const app = express();
const { people } = require("./data"); // ! phải destructure vì trong data export ra {}

// * check data.js >>> products & people
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log("Server is listening to port 5000....");
});
