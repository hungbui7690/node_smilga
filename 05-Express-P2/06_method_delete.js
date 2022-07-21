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

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

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

// ! khi chúng ta delete thì không cần bất cứ gì ở body >>>> hiện tại làm tạm với JSON, sau này sẽ làm trực tiếp với db
app.delete("/api/people/:id", (req, res) => {
  // * làm y chang thằng PUT
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person)
    return res
      .status(404)
      .json({ success: false, msg: `No person with id of ${req.params.id}` });

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

// *================================

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
