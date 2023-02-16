const {Router}=require("express");
const {addProduct,allProduct,updateProduct,deleteProduct,getProduct}=require("../controller/productsController");

const productRouter=new Router();
productRouter.post("/create", async (req,res) => {
    try {
        if (req.isAuth) {
            if (req.access==="admin") {
                const response = await addProduct(req);
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
        res.send({err: error.message});
        res.end();
    }
})
productRouter.get("/all", async (req,res) => {
    try {
        const response = await allProduct(req);
            res.send(response);
            res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})
productRouter.patch("/update/:productId", async (req,res) => {
    try {
        if (req.isAuth) {
            if (req.access==="admin") {
                const response = await updateProduct(req);
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
        res.send({err: error.message});
        res.end();
    }
})
productRouter.delete("/delete/:productId", async (req,res) => {
    try {
        if (req.isAuth) {
            if (req.access==="admin") {
                const response = await deleteProduct(req);
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
        res.send({err: error.message});
        res.end();
    }
})
productRouter.get("/:productId", async (req,res) => {
    try {
        const response = await getProduct(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})


module.exports = productRouter;