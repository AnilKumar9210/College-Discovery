import mongoose from "mongoose";

const chatSchema =
    new mongoose.Schema({

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        message: String,

        response: String

    }, {
        timestamps: true
    });

export default mongoose.model(
    "ChatHistory",
    chatSchema
);