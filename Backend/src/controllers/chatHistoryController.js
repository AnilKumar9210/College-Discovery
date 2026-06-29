import Chat from "../models/Chat.js";

/* =========================
   Create New Chat
========================= */

export const createChat = async (
  req,
  res
) => {
  try {

    const {
      title,
      message,
    } = req.body;

    const chat =
      await Chat.create({
        user: req.user._id,

        title:
          title ||
          message?.slice(
            0,
            40
          ) ||
          "New Chat",

        messages: message
          ? [
              {
                role: "user",
                content:
                  message,
              },
            ]
          : [],
      });

    return res.status(201).json({
      success: true,
      data: chat,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        error.message,
    });

  }
};

/* =========================
   Get All Chats
========================= */

export const getChats = async (
  req,
  res
) => {
  try {

    const chats =
      await Chat.find({
        user:
          req.user._id,
      })
        .sort({
          updatedAt: -1,
        })
        .select(
          "_id title updatedAt"
        );

    return res.status(200).json({
      success: true,
      count:
        chats.length,
      data: chats,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        error.message,
    });

  }
};

/* =========================
   Get Single Chat
========================= */

export const getChatById =
  async (
    req,
    res
  ) => {
    try {

      const chat =
        await Chat.findOne({
          _id:
            req.params.id,

          user:
            req.user._id,
        });

      if (!chat) {

        return res.status(404).json({
          success: false,
          message:
            "Chat not found",
        });

      }

      return res.status(200).json({
        success: true,
        data: chat,
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };

/* =========================
   Add Message
========================= */

export const addMessage =
  async (
    req,
    res
  ) => {
    try {

      const {
        role,
        content,
      } = req.body;

      const chat =
        await Chat.findOne({
          _id:
            req.params.id,

          user:
            req.user._id,
        });

      if (!chat) {

        return res.status(404).json({
          success: false,
          message:
            "Chat not found",
        });

      }

      chat.messages.push({
        role,
        content,
      });

      await chat.save();

      return res.status(200).json({
        success: true,
        data: chat,
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };

/* =========================
   Delete Chat
========================= */

export const deleteChat =
  async (
    req,
    res
  ) => {
    try {

      const chat =
        await Chat.findOne({
          _id:
            req.params.id,

          user:
            req.user._id,
        });

      if (!chat) {

        return res.status(404).json({
          success: false,
          message:
            "Chat not found",
        });

      }

      await Chat.findByIdAndDelete(
        req.params.id
      );

      return res.status(200).json({
        success: true,
        message:
          "Chat deleted successfully",
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };