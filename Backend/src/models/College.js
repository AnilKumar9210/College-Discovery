import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },

    duration:{
        type:String,
        required:true
    },

    fees:{
        type:Number,
        required:true
    }

},{
    _id:false
});


const placementSchema =
new mongoose.Schema({

    averagePackage:{
        type:Number,
        default:0
    },

    highestPackage:{
        type:Number,
        default:0
    },

    topRecruiters:[String]

},{
    _id:false
});


const collegeSchema =
new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    location:{
        type:String,
        required:true
    },

    state:{
        type:String,
        required:true,
        index:true
    },

    fees:{
        type:Number,
        required:true,
        index:true
    },

    rating:{
        type:Number,
        min:0,
        max:5,
        default:0,
        index:true
    },

    nirfRank:{
        type:Number,
        default:null
    },

    image:{
        type:String,
        default:""
    },

    overview:{
        type:String,
        required:true
    },

    courses:[courseSchema],

    placements:placementSchema,

    examCutoffs:{
        type:Map,
        of:Number,
        default:{}
    }

},{
    timestamps:true
});


/* Search Index */
collegeSchema.index({
    name:"text",
    state:"text",
    location:"text"
});


export default mongoose.model(
    "College",
    collegeSchema
);