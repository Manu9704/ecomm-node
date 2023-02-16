const {Router}=require("express");
const {getCart,createCart,updateCart,deleteCart}=require("../controller/cartController");
const cartRouter=new Router();

cartRouter.post("/create",async (req,res)=>{
    try {
        if (req.isAuth) {
            if (req.access==="customer") {
                const response = await createCart(req);
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

cartRouter.patch("/update/:cartId",async (req,res)=>{
    try {
        if (req.isAuth) {
            if (req.access==="customer") {
                const response = await updateCart(req);
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

cartRouter.delete("/delete/:cartId",async (req,res)=>{
    try {
        if (req.isAuth) {
            if (req.access==="customer") {
                const response = await deleteCart(req);
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

cartRouter.get("/:cartId",async (req,res)=>{
    try {
        if (req.isAuth) {
            const response = await getCart(req);
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
module.exports=cartRouter;