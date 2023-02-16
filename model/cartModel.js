const {Schema,SchemaTypes}=require("mongoose");
const itemsSchema=new Schema({
    product:{
        type:SchemaTypes.ObjectId,
        required:true,
        ref:"productsModel"
    },
    quantity:{
        type:SchemaTypes.Number,
        required:true
    }
})
const cartSchema=new Schema({
    items:{
        type:[itemsSchema],
        required:false
    },
    totalPrice:{
        type:SchemaTypes.Number,
        required:true
    },
    totalQuantity:{
        type:SchemaTypes.Number,
        required:true
    }

})
module.exports=mongoose.model("cartModel",cartSchema)