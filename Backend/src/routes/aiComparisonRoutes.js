import express from "express";

import {
  compareColleges,
} from "../controllers/aiComparisonController.js";

const router =
  express.Router();

router.post(
  "/",
  compareColleges
);

export default router;