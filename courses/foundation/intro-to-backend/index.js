import express from "express";
import knex from "knex";

const app = express();

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

// ---------------------------------------------------------------------------
// HOME — devuelve una página HTML que consume /user-count desde el navegador
// ---------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Florencia's API</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%);
      color: #e2e8f0;
      padding: 1.5rem;
    }

    .card {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 18px;
      padding: 3rem 4rem;
      text-align: center;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
    }

    h1 {
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #94a3b8;
      margin-bottom: 1.75rem;
    }

    #count {
      font-size: 5rem;
      font-weight: 700;
      line-height: 1;
      color: #38bdf8;
    }

    .label {
      margin-top: 0.75rem;
      color: #94a3b8;
      font-size: 0.95rem;
    }

    .routes {
      margin-top: 2.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.9;
    }

    .routes a { color: #7dd3fc; text-decoration: none; }
    .routes a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <main class="card">
    <h1>Florencia's API</h1>
    <p id="count">—</p>
    <p class="label">users in the database</p>

    <div class="routes">
      <a href="/currentYear">/currentYear</a> ·
      <a href="/greet/Florencia">/greet/:name</a> ·
      <a href="/sum?a=7&b=5">/sum?a=7&b=5</a> ·
      <a href="/users">/users</a>
    </div>
  </main>

  <script>
    async function loadUserCount() {
      const element = document.getElementById("count");
      try {
        const response = await fetch("/user-count");
        const data = await response.json();
        element.textContent = data.count;
      } catch (error) {
        element.textContent = "!";
        console.error(error);
      }
    }

    loadUserCount();
  </script>
</body>
</html>`);
});

// ---------------------------------------------------------------------------
// Ruta que ya tenías
// ---------------------------------------------------------------------------
app.get("/currentYear", (req, res) => {
  res.json({ currentYear: new Date().getFullYear() });
});

// ---------------------------------------------------------------------------
// /user-count — la que consume la página de arriba
// ---------------------------------------------------------------------------
app.get("/user-count", async (req, res) => {
  const result = await db("users").count("* as count").first();
  res.json({ count: result.count });
});

// ---------------------------------------------------------------------------
// RUTA NUEVA 1 — parámetro de ruta (route param)
// ---------------------------------------------------------------------------
app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

// ---------------------------------------------------------------------------
// RUTA NUEVA 2 — query params + validación
// ---------------------------------------------------------------------------
app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res
      .status(400)
      .json({ error: "Please provide two numbers, e.g. /sum?a=7&b=5" });
  }

  res.json({ a, b, result: a + b });
});

// ---------------------------------------------------------------------------
// RUTA NUEVA 3 — lee la base de datos con knex
// ---------------------------------------------------------------------------
app.get("/users", async (req, res) => {
  const users = await db("users").select("*").limit(20);
  res.json(users);
});

app.listen(3000, function () {
  console.log(`>Ready on http://localhost:3000`);
});
