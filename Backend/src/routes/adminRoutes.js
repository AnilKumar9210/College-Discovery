import express from "express";

import protect
    from "../middleware/authMiddleware.js";

import admin
    from "../middleware/adminMiddleware.js";

import {

    createCollege,

    updateCollege,

    deleteCollege

}
    from "../controllers/adminController.js";

const router =
    express.Router();

router.post(
    "/colleges",
    protect,
    admin,
    createCollege
);

router.put(
    "/colleges/:id",
    protect,
    admin,
    updateCollege
);

router.delete(
    "/colleges/:id",
    protect,
    admin,
    deleteCollege
);

export default router;