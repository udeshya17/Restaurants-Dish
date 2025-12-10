import app from "./app";
import { ENV } from "./config/env";
import { db } from "./config/db";
import { initDB } from "./config/initDB";
import { seedDB } from "./config/seedDB";

const PORT = ENV.PORT;

(async () => {
  try {
    // Test database connection
    await db.getConnection();
    console.log("Database connection successful");

    // Create tables if they do not exist
    await initDB();

    // Seed database only if tables are empty
    await seedDB();

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to initialize server:", error);
    process.exit(1);
  }
})();
