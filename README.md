# 📘 Restaurant Dish Search Service — Backend

A simple backend service that allows users to search for restaurants based on a dish name, filter results by a price range, and return the top restaurants where the dish has been ordered the most.

This project is built with **Node.js**, **TypeScript**, **Express**, **MySQL**, and follows a clean layered architecture.

---

## 📂 Project Structure

```
restaurant-service/
│
├── src/
│   ├── config/
│   │   ├── env.ts              # Environment variables loader
│   │   ├── db.ts               # MySQL connection pool
│   │   ├── initDB.ts           # Automatically creates tables
│   │   └── seedDB.ts           # Seeds data from SQL files if empty
│   │
│   ├── controllers/
│   │   └── searchController.ts # Handles API requests
│   │
│   ├── services/
│   │   └── searchService.ts    # Business logic for search
│   │
│   ├── repositories/
│   │   └── searchRepository.ts # SQL queries for dish search
│   │
│   ├── routes/
│   │   └── searchRoutes.ts     # Defines API route
│   │
│   ├── models/
│   │   ├── Restaurant.ts
│   │   ├── MenuItem.ts
│   │   └── Order.ts
│   │
│   ├── seed/
│   │   ├── seedRestaurants.sql
│   │   ├── seedMenu.sql
│   │   └── seedOrders.sql
│   │
│   ├── app.ts                  # Express app configuration
│   └── server.ts               # App entry point + DB init + seeding
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **MySQL**
- **mysql2** (Promise-based MySQL client)

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd restaurant-service
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create .env File

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=restaurant_db
PORT=3000
NODE_ENV=development
```

### 4️⃣ Ensure MySQL Server is Running

Start your MySQL server locally.

---

## 🛠️ What Happens on Server Start?

When you run the project:

- ✔ **Tables are created automatically** (`initDB.ts`)
- ✔ **Seed data is inserted automatically** from SQL files if the DB is empty (`seedDB.ts`)
- ✔ **No duplicate data will be inserted**

**You do not need to manually run SQL.**

---

## 🚀 Run the Project (Development Mode)

```bash
npm run dev
```

**Expected console output:**

```
Database connection successful
Tables created (or already exist)
Seeding database using SQL files...
Seeding completed successfully
Server running on port 3000
```

---

## 🧪 Testing the API

Use Postman or cURL.

### ✔ 1. Health Check

```
GET http://localhost:3000/health
```

### ✔ 2. Search for a Dish (Main API)

```
GET http://localhost:3000/search/dishes?name=biryani&minPrice=150&maxPrice=300
```

**Example Response:**

```json
{
  "restaurants": [
    {
      "restaurantId": 5,
      "restaurantName": "Hyderabadi Spice House",
      "city": "Hyderabad",
      "dishName": "Chicken Biryani",
      "dishPrice": 220,
      "orderCount": 96
    }
  ]
}
```

---

## 🧪 cURL Commands for Testing

**Search dish:**

```bash
curl "http://localhost:3000/search/dishes?name=biryani&minPrice=150&maxPrice=300"
```

**Health check:**

```bash
curl "http://localhost:3000/health"
```

---

## 📝 Postman Collection

A ready-to-import Postman collection is included in this project:

`restaurant-service.postman_collection.json`

---

## 🧱 Database Tables (Auto-Created)

### restaurants

| id | name | city |
|----|------|------|

### menu_items

| id | restaurant_id | name | price |
|----|---------------|------|-------|

### orders

| id | restaurant_id | menu_item_id |
|----|---------------|--------------|

---

## 🧠 Architecture Overview

This backend follows a clean layered architecture:

```
Route → Controller → Service → Repository → Database
```

- ✔ **Route** - Defines the API endpoint
- ✔ **Controller** - Receives request, calls service
- ✔ **Service** - Handles core business logic
- ✔ **Repository** - Executes SQL queries
- ✔ **Database** - MySQL storing restaurants, menu items, orders

---

## 📦 Build Project

To generate compiled JavaScript in `/dist`:

```bash
npm run build
```

---

## 🚀 Start Production Build

```bash
npm start
```

---

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server (requires build first)
- `npm run seed` - Seed database manually (optional, auto-seeds on startup)

---

## 🔍 API Endpoints

### Search by Dish Name

**Endpoint:** `GET /search/dishes`

**Query Parameters:**
- `name` (required) - Dish name to search for
- `minPrice` (required) - Minimum price filter
- `maxPrice` (required) - Maximum price filter

**Response:** Returns top 10 restaurants where the dish has been ordered the most, filtered by price range.

---

## 📄 License

ISC

---

## 👤 Author

Udeshya Sharma

