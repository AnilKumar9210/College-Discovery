import express from "express";
import { recommendColleges } from "../controllers/recomendationController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/*
  POST /api/recommendations

  Body:
  {
    "exam":"JEE",
    "rank":4500,
    "preferredState":"Tamil Nadu",
    "maxFees":250000
  }
*/
router.post(
    "/",
    protect,
    recommendColleges
);

export default router;