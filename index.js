const express=require("express");
const {json,urlencoded}=require("express");
const fs=require("fs")
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
const mongoose=require("mongoose");
const app=express();
mongoose.set('strictQuery', false);

const auth=require("../E-Commerce/middleware/auth")
const productRouter=require("./routes/productsRoute");
const couponRouter=require("./routes/couponRoute");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");
const paymentRouter = require("./routes/paymentRoute");
const addressRouter = require("./routes/addressRoute");
const rzpRouter = require("./routes/rzpRoute");

app.use(cors());
app.use(json());
app.use(urlencoded({extended:false}));
app.use(auth);


const mongoUser=process.env.MONGO_USER;
const mongoPass=process.env.MONGO_PASS;
const mongoDb=process.env.MONGO_DB;

const mongoUrl="mongodb+srv://"+mongoUser+":"+mongoPass+"@cluster0.o39zzql.mongodb.net/"+mongoDb;
mongoose.connect(mongoUrl,(err)=>{
    if(err)console.log(err);
    else console.log("DATABASE CONNECTED")
})

app.use("/products",productRouter);
app.use("/coupons",couponRouter);
app.use("/users",userRouter);
app.use("/cart",cartRouter);
app.use("/order",orderRouter);
app.use("/address",addressRouter);
app.use("/payment",paymentRouter);
app.use("/rzp",rzpRouter);

app.get("/",(req,res)=>{
    const indhtml=fs.readFileSync("./index.html","utf-8");
    res.type(".html").send(indhtml)
})
app.listen(2000,()=>console.log("SERVER RUNNING IN 2000"))