const {MongoClient}=require("mongodb");

const mongoUser=process.env.MONGO_USER;
const mongoPass=process.env.MONGO_PASS;
const mongoDb=process.env.MONGO_DB;
const mongoUrl="mongodb+srv://"+mongoUser+":"+mongoPass+"@cluster0.o39zzql.mongodb.net/"

const client=new MongoClient(mongoUrl);

const db=client.db(mongoDb);
exports.userCollection=db.collection("user");
exports.productsCollection=db.collection("products");
exports.addressCollection=db.collection("address");
exports.cartCollection=db.collection("cart");
exports.orderCollection=db.collection("order");
exports.paymentCollection=db.collection("payment");
exports.couponCollection=db.collection("coupon");
