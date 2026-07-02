import express from "express";
import sequelize from "./db/connection.js";
import authRouter from "./routes/authRouter.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7777;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
});
