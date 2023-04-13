let data = [
  { description: "hi1", id: "1", checked: false },
  { description: "hi2", id: "2", checked: false },
  { description: "hi3", id: "3", checked: false },
  { description: "hi4", id: "4", checked: false },
  { description: "hi5", id: "5", checked: false },
  { description: "hi6", id: "6", checked: false },
  { description: "hi7", id: "7", checked: false },
];

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.json(data);
});

app.post("/", function (req, res) {
  const todo = req.body;
  data.push(todo);
  res.send();
});

app.patch("/:id", function (req, res) {
  const id = req.params;
  const todo = req.body;
  data = data.filter((t) => t.id !== id);
  data.push(todo);
  res.send();
});

app.delete("/:id", function (req, res) {
  const id = req.params.id;
  data = data.filter((t) => t.id !== id);
  res.send();
});

app.listen(3000);
