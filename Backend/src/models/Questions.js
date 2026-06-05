import mongoose from "mongoose";

const answerSchema=
new mongoose.Schema({

    answerText:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});


const questionSchema=
new mongoose.Schema({

    questionText:{
        type:String,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    answers:[answerSchema],

    createdAt:{
        type:Date,
        default:Date.now
    }

});


export default mongoose.model(
    "Question",
    questionSchema
);