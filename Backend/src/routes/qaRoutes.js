import express from "express";

import protect
from "../middleware/authMiddleware.js";

import {

    getQuestions,

    createQuestion,

    addAnswer

}
from "../controllers/qaController.js";

const router =
    express.Router();

router.get(
    "/",
    getQuestions
);

router.post(
    "/",
    protect,
    createQuestion
);

router.post(
    "/:id/answers",
    protect,
    addAnswer
);

export default router;