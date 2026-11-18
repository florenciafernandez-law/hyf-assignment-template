import express from "express";
const app = express(); 

app.get("/", (req, res) => {
  res.send("This is the exercise of Florencia!");
});

app.get("/currentYear", (req, res) => {
  res.json({ currentYear: new Date().getFullYear() });
});

app.listen(3000, function () {
  console.log(`>Ready on http://localhost:3000`);
});

