import { searchRepository } from "../repositories/searchRepository";

export const searchService = {
  async searchByDish(name: string, minPrice: number, maxPrice: number) {
    if (!name) throw new Error("Dish name is required");

    if (isNaN(minPrice) || isNaN(maxPrice)) {
      throw new Error("Price range is required");
    }

    return await searchRepository.searchDishes(name, minPrice, maxPrice);
  }
};
