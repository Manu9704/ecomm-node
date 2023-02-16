const {Router}=require("express");
const {getOrder,createOrder,updateOrder,getAllOrders}=require("../controller/orderController");
const orderRouter=new Router();

orderRouter.post("/create",async (req,res)=>{
    try {
        if (req.isAuth) {
            if (req.access==="customer") {
                const response = await createOrder(req);
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

orderRouter.patch("/update/:orderId",async (req,res)=>{
    try {
        if (req.isAuth) {
            if (req.access==="customer") {
                const response = await updateOrder(req);
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


orderRouter.get("/:orderId",async (req,res)=>{
    try {
        if (req.isAuth) {
            const response = await getOrder(req);
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

orderRouter.get("/",async (req,res)=>{
    try {
        if (req.isAuth) {
            if (req.access==="admin") {
                const response = await getAllOrders(req);
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
module.exports=orderRouter;