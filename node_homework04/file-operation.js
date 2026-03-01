import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
const data = process.env.FILENAME;

fs.writeFile(data, "I have put here some text", (err) => {
  if (err) {
    console.log("error while writing file:", err);
  }

  console.log("file has successfully written");
  fs.readFile(data, "utf-8", (err, fileContent) => {
    if (err) {
      console.log("error while reading file:", err);
    }
    console.log("Reading the file...success, update is:", fileContent);
  });
});
