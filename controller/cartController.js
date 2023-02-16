const mongodb=require("mongodb");
const userModel=require("../model/userModel");
const {cartCollection}=require("../mongoDBConfig");

exports.getCart=async(data)=>{
    try {
        const {cartId}=data.params;
        const id=new mongodb.ObjectId(cartId);
        const cart=await cartCollection.findOne({_id:id});
        return cart;
    } catch (error) {
        return({err:error.message})
    }
}

exports.createCart=async(data)=>{
    try {
        const {body}=data;
        const cart=await cartCollection.insertOne(body);
        const cartId=await cart.Id;
         const updateUser=await userModel.findByIdAndUpdate(data.userId,{
            $push:{cart:cartId}});
    } catch (error) {
        return({err:error.message})
    }
}

exports.updateCart=async(data)=>{
    try {
        const {cartId}=data.params;
        const id=new mongodb.ObjectId(cartId);
        const cart=await cartCollection.findOneAndUpdate({_id:id},{
            ...data.body});
        return cart;
    } catch (error) {
        return({err:error.message})
    }
}

exports.deleteCart=async(data)=>{
    try {
        const {cartId}=data.params;
        const id=new mongodb.ObjectId(cartId);
        // const cart=await cartCollection.findOneAndDelete({_id:id})
        const updateUser=await userModel.findByIdAndUpdate(data.userId,{
            cart:null
        });
        return ({msg:"Cart Deleted"});
    } catch (error) {
        return({err:error.message})
    }
}
