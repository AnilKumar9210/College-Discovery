import express from "express";

import protect
    from "../middleware/authMiddleware.js";

import admin
    from "../middleware/adminMiddleware.js";

import {

    createCollege,
    updateCollege,
    deleteCollege,
    getDashboardStats,
    getAllColleges

}
    from "../controllers/adminController.js";

const router =
    express.Router();

router.post(
    "/admin/colleges",
    protect,
    admin,
    createCollege
);

router.put(
    "/admin/colleges/:id",
    protect,
    admin,
    updateCollege
);

router.delete(
    "/admin/colleges/:id",
    protect,
    admin,
    deleteCollege
);

router.get(
    "/admin/stats",
    protect,
    admin,
    getDashboardStats
);


router.get (
    "/admin/colleges",
    protect,
    admin,
    getAllColleges
);

export default router;