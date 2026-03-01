import db from "./db.js";

async function setup() {
  try {
    await db.query(
      `
            CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL
            )
            `,
    );
    console.log("Table products created (or already exists)");
    process.exit(0);
  } catch (err) {
    console.log("Error creating table:", err);
    process.exit(1);
  }
}

setup();
