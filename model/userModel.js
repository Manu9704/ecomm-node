const mongoose=require("mongoose");
const dataTypes=mongoose.SchemaTypes;
const userSchema=new mongoose.Schema({
    name:{
        type:dataTypes.String,
        required:true
    },
    email:{
        type:dataTypes.String,
        required:true
    },
    phone:{
        type:dataTypes.Number,
        required:true
    },
    password:{
        type:dataTypes.String,
        required:true
    },
    coupon:{
        type:[dataTypes.ObjectId],
        required:true,
        ref:"couponsModel"
    },
    address:{
        type:[dataTypes.String],
        required:true
    },
    orders:{
        type:[dataTypes.String],
        required:false
    },
    access:{
        type:dataTypes.String,
        required:true
    }
})
module.exports=mongoose.model("userModel",userSchema);