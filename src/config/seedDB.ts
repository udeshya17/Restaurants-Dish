import fs from "fs";
import path from "path";
import { db } from "./db";

export const seedDB = async () => {
  try {
    console.log("Checking if seeding is required...");

    const [rows]: any = await db.query("SELECT COUNT(*) AS count FROM restaurants");

    if (rows[0].count > 0) {
      console.log("Seed data already exists. Skipping seeding.");
      return;
    }

    console.log("Seeding database using SQL files...");

    const restaurantsSQL = fs.readFileSync(
      path.resolve(process.cwd(), "src/seed/seedRestaurants.sql"),
      "utf8"
    );

    const menuSQL = fs.readFileSync(
      path.resolve(process.cwd(), "src/seed/seedMenu.sql"),
      "utf8"
    );

    const ordersSQL = fs.readFileSync(
      path.resolve(process.cwd(), "src/seed/seedOrders.sql"),
      "utf8"
    );

    await db.query(restaurantsSQL);
    await db.query(menuSQL);
    await db.query(ordersSQL);

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  }
};
