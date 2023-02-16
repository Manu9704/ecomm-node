const mongodb=require("mongodb");
const userModel=require("../model/userModel");
const jwt=require("jsonwebtoken");
const Crypto=require("crypto-js");
const bcrypt = require("bcrypt");
const {userCollection}=require("../mongoDBConfig");

exports.createUser=async(data)=>{
    try {
        const {email,phone,password}=data.body;
        const checkEmail=await userCollection.findOne({email});
        if(checkEmail){
            return({err:"Email already registered"})
        }
        const checkPhone=await userCollection.findOne({phone});
        if(checkPhone){
            return({err:"Phone number already used"})
        }
        const salt=await bcrypt.genSalt();
        const hashedPass=await bcrypt.hash(password,salt)
        console.log(hashedPass);
        const userData= await userCollection.insertOne({
            ...data.body,
            password:hashedPass
        })
        console.log(userData.insertedId)
        return userData;  
    } catch (error) {
        console.log(error);
        return({err:error.message})
    }
}
exports.login=async(data)=>{
    try {
        const {email,password} = data.body;
        const checkEmail=await userCollection.findOne({email});
        if(checkEmail){
            const checkPass=await bcrypt.compare(password,checkEmail.password);
            if(checkPass){
                const token = Crypto.AES.encrypt(JSON.stringify({
                    userId: checkEmail._id,
                    email: checkEmail.email,
                    access: checkEmail.access
                }), process.env.JWT_SECRET).toString()
                return{
                    token,
                    email,
                    userId:checkEmail._id,
                    accessId:checkEmail.access
                }
            }
            else{
                return ({err:"Wrong password"})
            }
        }
        else{
            return({err:"Email not found"})
        }
    } catch (error) {
        return ({err:error.message})
    }
}
exports.updatePassword=async(data)=>{
    try {
        const {body,userId}=data;
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(body.password,salt);
        const updateUser=await userModel.findOneAndUpdate(userId,
            {password: hashedPass},{new:true});
    } catch (error) {
        return ({err:error.message})
    }
}

exports.updateUser=async(data)=>{
    try {
        const {userId}=data.params;
        const id=new mongodb.ObjectId(userId);
        const user=await addressCollection.findOneAndUpdate({_id:id},{
            ...data.body});
            return user;
       } catch (error) {
        return ({err:error.message})
       }
}

exports.deleteUser=async(data)=>{
    try {
        const {userId}=data.params;
        const id=new mongodb.ObjectId(userId);
        const user=await userCollection.findOneAndDelete({_id:id});
        return ({msg:"Address Deleted"});
    } catch (error) {
        return({err:error.message});
    }
}