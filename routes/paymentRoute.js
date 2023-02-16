const {Router}=require("express");
const {get,getAll,update}=require("../controller/paymentController");
const paymentRouter=new Router();

paymentRouter.get("/:paymentId",async (req,res)=>{
    try {
        if (req.isAuth) {
            const response = await get(req);
            res.send(response);
            res.end();
            } else {
                const err=new Error("Unauthenticated Access");
                res.send({err:err.message});
            res.end();
            }
    } catch (error) {
        res.send({err:error.message})
    }
})

paymentRouter.patch("/update/:paymentId",async (req,res)=>{
    try {
        if (req.isAuth) {
            const response = await update(req);
            res.send(response);
            res.end();
            } else {
                const err=new Error("Unauthenticated Access");
                res.send({err:err.message});
            res.end();
            }
    } catch (error) {
        res.send({err:error.message})
    }
})

paymentRouter.get("/",async (req,res)=>{
    try {
        if (req.isAuth) {
            if (req.access==="admin") {
                const response = await getAll(req);
            res.send(response);
            res.end();
            } else {
                const err=new Error("Unauthorised Access");
                    res.send({err:err.message});
                    res.end();
            }
            } else {
                const err=new Error("Unauthenticated Access");
                res.send({err:err.message});
            res.end();
            }
    } catch (error) {
        res.send({err:error.message})
    }
})
module.exports=paymentRouter;