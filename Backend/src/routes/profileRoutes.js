import express from "express";

import protect
    from "../middleware/authMiddleware.js";

import {

    updateStudentProfile,

    getStudentProfile

}
    from "../controllers/profileController.js";

const router =
    express.Router();

router.put(
    "/",
    protect,
    updateStudentProfile
);

router.get(
    "/",
    protect,
    getStudentProfile
);

export default router;