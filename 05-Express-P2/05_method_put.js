/* 
  * lưu ý: sử dụng convention như sau

  * GET     www.store.com/api/orders        get all orders
  * POST    www.store.com/api/orders        place an order (send data) 
  * GET     www.store.com/api/orders/:id    get single order (path params)
  * PUT     www.store.com/api/orders/:id    update specific ordre (param + send data)
  * DELETE  www.store.com/api/orders/:id    delete order (path params)'
  * 
  * 
  * khi update thì trong body phải chứa thông tin cần update
  * khi delete thì trong body KHÔNG cần phải chứa thông tin 
*/

const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ success: false, msg: "Please provide name" });

  res.status(201).json({ success: true, data: [...people, name] });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ success: false, msg: "Please provide name" });

  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) return res.status(200).send(`Welcome, ${name}`);

  return res.status(401).send("Please provide credential");

  res.send("POST");
});

// *================================
// ! sử dụng postman để test >>> http://localhost:5000/api/people/1
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // console.log(id, name);
  // res.send("hello");

  const person = people.find((person) => person.id === Number(id));
  if (!person)
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// *================================

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
