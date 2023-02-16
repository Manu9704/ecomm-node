const {Schema, SchemaTypes}=require("mongoose");

const orderSchema=new Schema({
    cart:{
        type:SchemaTypes.ObjectId,
        required:true,
        ref:"cartModel"
    },
    payment:{
        type:SchemaTypes.ObjectId,
        required:true,
        ref:"paymentModel"
    },
    address:{
        type:SchemaTypes.String,
        required:true
    },
    coupon:{
        type:SchemaTypes.ObjectId,
        required:true,
        ref:"couponsModel"
    },
    tax:{
        type:SchemaTypes.String,
        required:true
    },
    taxId:{
        type:SchemaTypes.String,
        required:true
    }
})
module.exports=mongoose.model("orderModel",orderSchema)