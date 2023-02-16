const mongoDb=require("mongodb");
const userModel = require("../model/userModel");
const {addressCollection}=require("../mongoDBConfig");

exports.addAddress=async(data)=>{
    try {
        const {body}=data;
        const address=addressCollection.insertOne(body);
        const addressId=await address.insertedId;
        const updateUser=await userModel.findByIdAndUpdate(data.userId,{
            $push:{address:addressId}
        });
        return address;
    } catch (error) {
        return({err:error.message});
    }
}


exports.getAddress=async(data)=>{
    try {
        const {addressId}=data.params;
        const id=new mongoDb.ObjectId(addressId);
        const address=await addressCollection.findOne({_id:id});
        return address;
    } catch (error) {
        return ({err:error.message})
    }
}


exports.updateAddress=async(data)=>{
   try {
    const {addressId}=data.params;
    const id=new mongoDb.ObjectId(addressId);
    const address=await addressCollection.findOneAndUpdate({_id:id},{
        ...data.body});
        return address;
   } catch (error) {
    return ({err:error.message})
   }
}

exports.deleteAddress=async(data)=>{
    try {
        const {addressId}=data.params;
        const id=new mongoDb.ObjectId(addressId);
        const address=await addressCollection.findOneAndDelete({_id:id})
        const updateUser=await userModel.findByIdAndUpdate(data.userId,{
            $push:{address:addressId}
        });
        return ({msg:"Address Deleted"});
    } catch (error) {
        return({err:error.message});
    }
}

exports.getAllAddress=async(data)=>{
    try {
        const {body}=data;
        const address=await addressCollection.find(body);
        return address;
    } catch (error) {
        return ({err:error.message})
    }
}