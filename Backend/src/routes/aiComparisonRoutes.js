import express from "express";

import protect
    from "../middleware/authMiddleware.js";

import {
    compareCollegesAI
}
    from "../controllers/aiComparisonController.js";

const router =
    express.Router();

router.post(
    "/",
    protect,
    compareCollegesAI
);

export default router;