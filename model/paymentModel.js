const {Schema, SchemaTypes, default: mongoose}=require("mongoose");

const paymentSchema=new Schema({
    userId:{
        type:SchemaTypes.ObjectId,
        required:true,
        ref:"userModel"
    },
    cartId:{
        type:SchemaTypes.ObjectId,
        required:true,
        ref:"cartModel"
    },
    paymentId:{
        type:SchemaTypes.String,
        required:true,
    },
    paymentStatus:{
        type:SchemaTypes.String,
        required:true,
    }
})
module.exports=mongoose.model("paymentModel",paymentSchema)