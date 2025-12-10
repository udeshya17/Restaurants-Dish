import app from "./app";
import { ENV } from "./config/env";
import { db } from "./config/db";

const PORT = ENV.PORT;

// Test database connection on startup
(async () => {
  try {
    await db.getConnection();
    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
})();
