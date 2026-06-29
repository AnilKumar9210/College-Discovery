import express from "express"

import protect from "../middleware/authMiddleware.js"

import {
    createChat,
    getChats,
    getChatById,
    addMessage,
    deleteChat,
} from "../controllers/chatHistoryController.js"

const router = express.Router();

router.post ('/',protect,createChat);

// get all chats

router.get ('/',protect,getChats);

router.get ('/:id',protect,getChatById);

router.put ('/:id/message',protect,addMessage);

router.delete ('/:id',protect,deleteChat);



export default router;