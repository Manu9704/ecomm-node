const jwt=require("jsonwebtoken");
const CryptoJS=require("crypto-js")
module.exports=(req,res,next)=>{
    const authHeader=req.get("Authorization");
    console.log(authHeader);
    if(!authHeader){
        req.isAuth=false;
        return next();
    }
    const token=authHeader.split(" ")[1];
    if(!token){
        req.isAuth=false;
        return next();
    }
    try {
        var bytes = CryptoJS.AES.decrypt(token, process.env.JWT_SECRET);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        const decodedToken = JSON.parse(originalText);
        console.log(originalText)
        const keys = Object.keys(decodedToken); 
        if (keys.length) {
            req.isAuth = true;
            req.userId = decodedToken.userId;
            req.email = decodedToken.email;
            req.access = decodedToken.access;
            return next();
        } else {
            req.isAuth = false;
            return next();
        }
    } catch (error) {
        console.log(error)
        req.isAuth=false;
        return next();
    }
}