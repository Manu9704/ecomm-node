const {Router}=require("express");
const {login,createUser,updateUser,deleteUser} = require("../controller/userController");

const userRouter=new Router();

userRouter.post("/createUser",async(req,res)=>{
    try {
        const response = await createUser(req);
            res.send(response);
            res.end();
    } catch (error) {
        res.send({err:error.message});
        res.end();
    }
})

userRouter.post("/login",async(req,res)=>{
    try {
        const response=await login(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err:error.message});
        res.end()
    }
})

userRouter.post("/updatePassword",async (req,res)=>{
    try {
        if(req.isAuth){
            const response=await updatePassword(req);
            res.send(response);
            res.end();
        }
        else{
            res.send({err:"PLEASE LOGIN!!"});
            res.end();
        }
    } catch (error) {
        res.send({err:error.message});
        res.end()
    }
})

userRouter.post("/updateUser",async (req,res)=>{
   try {
    if(req.isAuth){
        const response=await updateUser(req);
        res.send(response);
        res.end();
    }
    else{
        res.send({err:"PLEASE LOGIN!!"});
        res.end();
    }
   } catch (error) {
    res.send({err:error.message});
    res.end()
   }
})

userRouter.post("/deleteUser",async (req,res)=>{
    try {
        if(req.isAuth){
            const response=await deleteUser(req);
            res.send(response);
            res.end();
        }
        else{
            res.send({err:"PLEASE LOGIN!!"});
            res.end();
        }
       } catch (error) {
        res.send({err:error.message});
        res.end()
       }
})

module.exports=userRouter;
