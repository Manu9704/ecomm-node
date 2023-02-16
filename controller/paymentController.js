const mongodb=require("mongodb");
const userModel=require("../model/userModel");
const {paymentCollection}=require("../mongoDBConfig");

exports.update=async(data)=>{
    try {
        const {paymentId}=data.params;
        const id=new mongodb.ObjectId(paymentId);
        const payment=await paymentCollection.findOneAndUpdate({_id:id},{
            ...data.body});
        return payment;
    } catch (error) {
        return({err:error.message})
    }
}
exports.get=async(data)=>{
    try {
        const {paymentId}=data.params;
        const id=new mongodb.ObjectId(paymentId);
        const payment=await paymentCollection.findOne({_id:id});
        return payment;
    } catch (error) {
        return({err:error.message})
    }
}
exports.getAll=async(data)=>{
    try {
        const payment=await paymentCollection.find({});
        return payment;
    } catch (error) {
        return({err:error.message})
    }
}