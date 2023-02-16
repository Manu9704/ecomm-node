const mongodb=require("mongodb");
const userModel=require("../model/userModel");
const {orderCollection}=require("../mongoDBConfig");

exports.getOrder=async (data)=>{
    try {
        const {orderId}=data.params;
        const id=new mongodb.ObjectId(orderId);
        const order=await orderCollection.findOne({_id:id});
        return order;
    } catch (error) {
        return({err:error.message})
    }
}

exports.createOrder=async (data)=>{
    try {
        const {body}=data;
        const order=await orderCollection.insertOne(body);
        const orderId=await order.Id;
         const updateUser=await userModel.findByIdAndUpdate(data.userId,{
            $push:{order:orderId}});
    } catch (error) {
        return({err:error.message})
    }
}

// exports.deleteOrder=async (data)=>{
//     try {
//         const {orderId}=data.params;
//         const id=new mongodb.ObjectId(orderId);
//         const order=await orderCollection.findOneAndDelete({_id:id})
//         const updateUser=await userModel.findByIdAndUpdate(data.userId,{
//             order:null
//         });
//         return ({msg:"Order Deleted"});
//     } catch (error) {
//         return({err:error.message})
//     }
// }

exports.updateOrder=async (data)=>{
    try {
        const {orderId}=data.params;
        const id=new mongodb.ObjectId(orderId);
        const order=await orderCollection.findOneAndUpdate({_id:id},{
            ...data.body});
        return order;
    } catch (error) {
        return({err:error.message})
    }
}

exports.getAllOrders=async(data)=>{
    try {
        const order=await orderCollection.find({});
        return order;
    } catch (error) {
        return({err:error.message})
    }
}