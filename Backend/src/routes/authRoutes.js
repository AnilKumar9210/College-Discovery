import express from "express";

import {
    signup,
    signin,
    getMe,
    saveCollege,
    unsaveCollege,
    saveComparison,
    resetPassword,
    forgotPassword,
    becomeAdmin
}
from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/me", protect, getMe);

router.post(
    "/save-college/:collegeId",
    protect,
    saveCollege
);

router.delete(
    "/save-college/:collegeId",
    protect,
    unsaveCollege
);

router.post(
    "/save-comparison",
    protect,
    saveComparison
);
router.post(
  "/forgot-password",
  forgotPassword
);

router.post(
  "/reset-password/:token",
  resetPassword
);

router.post (
    '/become-admin',
    protect,
    becomeAdmin
)

export default router;