import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

async function startServer() {
  try {
    await connectDB();
    app.post("/categories", async (req, res) => {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({
          message: "Category name is required",
        });
      }
      try {
        const category = await Category.create({
          name,
        });
        return res.status(201).json(category);
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    });

    app.post("/products", async (req, res) => {
      const { name, price, category } = req.body;
      if (!name || !price || !category) {
        return res.status(400).json({
          message: "Lack of informetion",
        });
      }
      try {
        const product = await Product.create({
          name,
          price,
          category,
        });
        return res.status(201).json(product);
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    });

    app.get("/products", async (req, res) => {
      try {
        const products = await Product.find().populate("category");

        return res.status(200).json(products);
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
}

startServer();
