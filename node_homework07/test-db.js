import sequelize from "./config/db.js";

async function test() {
  try {
    await sequelize.authenticate();
    console.log("Connection successful");
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

test();
