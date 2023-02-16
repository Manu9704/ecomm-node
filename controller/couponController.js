const couponsModel = require("../model/couponsModel");
const {couponsCollection}=require("../mongoDBConfig")
const productsModel = require("../model/productsModel");
const userModel=require("../model/userModel");
exports.addCoupon=async(data)=>{
    try {
        const{title,description,code,discount,minOrder,maxDiscount,type,expiry,ref}=data.body;
    const createdAt=new Date();
    const updatedAt=new Date();
    const coupon=await couponsCollection.insertOne({title,description,code,discount,minOrder,maxDiscount,type,expiry,ref,createdAt,updatedAt})
    const couponId=coupon._id;
    const entity=ref.split("<=>")[0];
    const entityId=ref.split("<=>")[1];
    if(entity=="product"){
        const productUpdate=await productsModel.findByIdAndUpdate(entityId,{discount:couponId});
    }
    // if(entity==user){
    //     const updateUser=await userModel.findByIdAndUpdate(entityId,{
    //         $push:{coupon:couponId}
    //     })
    // }
    return (coupon);
    } catch (error) {
        return ({err:error.message})
    }
}
exports.updateCoupon=async(data)=>{
    try {
        const {couponId}=data.params;
        const updatedCoupon=await couponsCollection.findOneAndUpdate(couponId,{
            ...data.body
        },{new:true});
        return (updatedCoupon);
    } catch (error) {
        return ({err:error.message})
    }
}
exports.deleteCoupon=async(data)=>{
    try {
        const {couponId}=data.params;
        const deleteCoupon=await couponsCollection.findOneAndDelete(couponId);
        return({msg:"COUPON DELETED"})
    } catch (error) {
        return({err:error.message})
    }
}
exports.get=async(data)=>{
    try {
        const {couponId}=data.params;
        const coupon=await productsCollection.findOne(couponId);
        return(coupon);
    } catch (error) {
        return({err:error.message})
    }
}
exports.getAll=async(data)=>{
    try {
        const {page,limit}=data.query;
        const coupons=await couponsCollection.find({$and:[{ref:"global"},{expiry:{$gte:new Date()}}]}).skip(limit*(page-1)).limit(limit).sort({updatedAt:"descending"});
        return(coupons);
    } catch (error) {
        return ({err:error.message})
    }
}