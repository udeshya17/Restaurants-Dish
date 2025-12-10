import dotenv from "dotenv";
import path from "path";

// Load .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const ENV = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: Number(process.env.DB_PORT) || 3306,
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_NAME: process.env.DB_NAME || "restaurant_db",
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
};
