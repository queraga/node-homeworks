import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connection.js";
import Publisher from "./models/Publisher.js";
import Magazine from "./models/Magazine.js";
import Tag from "./models/Tag.js";
import Article from "./models/Article.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
}

startServer();
