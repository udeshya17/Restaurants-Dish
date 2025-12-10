import { Request, Response } from "express";
import { searchService } from "../services/searchService";

export const searchController = {
  async searchByDish(req: Request, res: Response) {
    try {
      const { name, minPrice, maxPrice } = req.query;

      const results = await searchService.searchByDish(
        name as string,
        Number(minPrice),
        Number(maxPrice)
      );

      res.json({ restaurants: results });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};
