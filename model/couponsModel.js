const mongoose=require("mongoose");
const dataTypes=mongoose.SchemaTypes;
const couponSchema=new mongoose.Schema({
    title:{
        type:dataTypes.String,
        required:true
    },
    description:{
        type:dataTypes.String,
        required:true
    },
    code:{
        type:dataTypes.String,
        required:true
    },
    discount:{
        type:dataTypes.String,
        required:true,
    },
    minOrder:{
        type:dataTypes.String,
        required:true
    },
    maxDiscount:{
        type:dataTypes.String,
        required:true
    },
    type:{
        type:dataTypes.String,
        required:true
    },
    expiry:{
        type:dataTypes.String,
        required:true
    },
    ref:{
        type:dataTypes.String,
        required:true
    },
    createdAt: {
        type: dataTypes.String,
        required: true,
    },
    updatedAt: {
        type: dataTypes.String,
        required: true,
    },
});
module.exports=mongoose.model("couponModel",couponSchema)