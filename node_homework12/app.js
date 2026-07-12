import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { ObjectId } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

async function startServer() {
  try {
    const db = await connectDB();
    const productsCollection = db.collection("products");

    app.post("/products", async (req, res) => {
      const { name, price, description } = req.body;
      if (!name || !price || !description) {
        return res.status(400).json({
          message: "Not filled gaps",
        });
      }
      try {
        const newProduct = { name, price, description };
        const result = await productsCollection.insertOne(newProduct);
        return res.status(201).json({
          message: "Product added",
          product: {
            _id: result.insertedId,
            ...newProduct,
          },
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    });

    app.get("/products", async (req, res) => {
      try {
        const products = await productsCollection.find({}).toArray();
        return res.status(200).json(products);
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    });

    app.get("/products/:id", async (req, res) => {
      try {
        const product = await productsCollection.findOne({
          _id: new ObjectId(req.params.id),
        });
        if (!product) {
          return res.status(404).json({
            message: "not found",
          });
        }
        return res.status(200).json(product);
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    });

    app.put("/products/:id", async (req, res) => {
      const { name, price, description } = req.body;
      try {
        const result = await productsCollection.updateOne(
          {
            _id: new ObjectId(req.params.id),
          },
          { $set: { name, price, description } },
        );
        if (result.matchedCount === 0) {
          return res.status(404).json({
            message: "Product not found",
          });
        }
        {
          return res.status(200).json({
            message: "Product updated successfuly",
          });
        }
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    });

    app.delete("/products/:id", async (req, res) => {
      try {
        const result = await productsCollection.deleteOne({
          _id: new ObjectId(req.params.id),
        });
        if (result.deletedCount === 0) {
          return res.status(404).json({
            message: "Product not found",
          });
        }

        return res.status(200).json({
          message: "Product deleted successfully",
        });
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
