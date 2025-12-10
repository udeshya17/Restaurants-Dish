import { Router } from "express";
import { searchController } from "../controllers/searchController";

const router = Router();

router.get("/dishes", searchController.searchByDish);

export default router;
