import express from "express";
import knex from "knex";

const app = express();
app.use(express.json());

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true, // Omit warning in console
});

app.get("/", (req, res) => {
  res.send("This is the exercise 2 of Florencia!");
});

app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

app.get("/users/:id", async (req, res) => {
  const user = await knexInstance("users").where({ id: req.params.id }).first();
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.post("/users", async (req, res) => {
  const [id] = await knexInstance("users").insert(req.body);
  const user = await knexInstance("users").where({ id }).first();
  res.status(201).json(user);
});

app.put("/users/:id", async (req, res) => {
  const updated = await knexInstance("users")
    .where({ id: req.params.id })
    .update(req.body);
  if (!updated) return res.status(404).json({ error: "User not found" });
  const user = await knexInstance("users").where({ id: req.params.id }).first();
  res.json(user);
});

app.delete("/users/:id", async (req, res) => {
  const deleted = await knexInstance("users")
    .where({ id: req.params.id })
    .del();
  if (!deleted) return res.status(404).json({ error: "User not found" });
  res.status(204).end();
});

app.listen(3000, function () {
  console.log(`>Ready on http://localhost:3000`);
});
