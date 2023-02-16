const mongodb=require("mongodb");
const productsModel=require("../model/productsModel");
const {productsCollection}=require("../mongoDBConfig");
exports.addProduct=async(data)=>{
    try {
        const product=await productsCollection.insertOne({
            ...data.body,
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        return(product);
    } catch (error) {
        return({err:error.message})
    }
}

exports.updateProduct=async(data)=>{
    try {
        const {productId}=data.params;
        const updatedProduct=await productsCollection.findOneAndUpdate(productId,{
            ...data.body
        },{new:true});
        return(updatedProduct);
    } catch (error) {
        return({err:error.message})
    }
}

exports.deleteProduct=async(data)=>{
    try {
        const {productId}=data.params;
        const deleteProduct=await productsCollection.findOneAndDelete(productId);
        return({msg:"PRODUCT DELETED"})
    } catch (error) {
        return({err:error.message})
    }
}

exports.allProduct=async(data)=>{
    try {
        const {limit,page}=data.query;
        console.log(productsCollection)
        const products=await productsCollection.find({}).toArray();
        console.log(products);
        return(products);
    } catch (error) {
        console.log(error);
        return({err:error.message})
    }
}

exports.getProduct=async(data)=>{
    try {
        const {productId}=data.params;
        const getProduct=await productsCollection.findOne(productId);
        return(getProduct);
    } catch (error) {
        return({err:error.message})
    }
}
