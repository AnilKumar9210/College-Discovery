import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
    getDashboard
} from "../controllers/dashboardController.js";

const router = express.Router();

/*
    GET /api/dashboard

    Protected Route

    Returns:
    - Saved Colleges Count
    - Saved Comparisons Count
    - Total Colleges
    - Total Questions
*/

router.get(
    "/",
    protect,
    getDashboard
);

export default router;