import express from "express";
import Book from "./models/Book.js";

const app = express();
const PORT = 3333;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/books", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    console.log("error fetching books:", err);
    (res.status(500), json({ error: "Internal Server error" }));
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
      return res.status(400).json({
        error: "title, author, year are required",
      });
    }
    const newBook = await Book.create({
      title,
      author,
      year,
    });
    res.status(201).json(newBook);
  } catch (err) {
    console.log("Error creating book:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year } = req.body;

    const [updated] = await Book.update(
      { title, author, year },
      { where: { id } },
    );

    if (!updated) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book updated successfully" });
  } catch (err) {
    console.log("Error updating book:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({
      where: { id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log("Error deleting book", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
