import { db } from "./db";

export const initDB = async () => {
  try {
    console.log("Initializing database tables...");

    await db.query(`
      CREATE TABLE IF NOT EXISTS restaurants (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS menu_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        restaurant_id INT NOT NULL,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        restaurant_id INT NOT NULL,
        menu_item_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE,
        FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE CASCADE
      );
    `);

    console.log("Tables created (or already exist).");

  } catch (error) {
    console.error("Error creating tables:", error);
    throw error;
  }
};
