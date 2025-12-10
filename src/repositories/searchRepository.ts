import { db } from "../config/db";

export const searchRepository = {
  async searchDishes(dish: string, minPrice: number, maxPrice: number) {
    const query = `
      SELECT 
        r.id AS restaurantId,
        r.name AS restaurantName,
        r.city,
        m.name AS dishName,
        m.price AS dishPrice,
        COUNT(o.id) AS orderCount
      FROM menu_items m
      JOIN restaurants r ON r.id = m.restaurant_id
      LEFT JOIN orders o ON o.menu_item_id = m.id
      WHERE LOWER(m.name) LIKE LOWER(?)
      AND m.price BETWEEN ? AND ?
      GROUP BY r.id, m.id
      ORDER BY orderCount DESC
      LIMIT 10;
    `;

    const values = [`%${dish}%`, minPrice, maxPrice];

    const [rows] = await db.query(query, values);
    return rows;
  }
};
