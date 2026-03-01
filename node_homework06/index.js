import express from "express";
import db from "./db.js";

const app = express();
const port = 3333;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/products", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.log("Database error", err);
    res.statusCode = 500;
    res.send("Database error");
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || price === undefined) {
      res.statusCode = 400;
      res.send("Name and price are required");
      return;
    }
    const [result] = await db.query(
      "INSERT INTO products (name, price) VALUES (?, ?)",
      [name, price],
    );
    res.statusCode = 201;
    res.json({
      message: "Product added successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.log("database error:", err);
    res.statusCode = 500;
    res.send("Database Error");
  }
});

app.post("/", (req, res) => {
  if (Object.keys(req.body).length < 1) {
    res.statusCode = 400;
    res.end("Error");
    return;
  } else {
    res.statusCode = 200;
    res.end("Success");
  }
});

app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Page not found");
  console.log("Page not found");
});

app.use((err, req, res, next) => {
  res.statusCode = 500;
  res.setHeader("Content-Type", "text/plain");
  res.end("Internal Server Error");
  console.log("Internal Server Error", err);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
