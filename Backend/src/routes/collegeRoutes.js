import express from "express";

import {
    getColleges,
    getCollegeById,
    predictColleges
}
    from "../controllers/collegeController.js";

const router =
    express.Router();

router.get(
    "/",
    getColleges
);

router.get(
    "/:id",
    getCollegeById
);

router.post(
    "/predict",
    predictColleges
);

export default router;