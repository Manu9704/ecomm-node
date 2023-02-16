const { Router } = require("express");
const Razorpay = require("razorpay");
const { paymentCollection } = require("../mongoDBConfig");

const rzpRouter = new Router();
var instance = new Razorpay({ key_id: process.env.RZP_ID, key_secret: process.env.RZP_SECRET })

// instance.orders.create({
//   amount: 50000,
//   currency: "INR",
//   receipt: "receipt#1",
//   notes: {
//     key1: "value3",
//     key2: "value2"
//   }
// })
rzpRouter.post("/create", async (req, res) => {
    try {
        const { amount, currency, receipt, cartId, userId } = req.body;
        console.log(req.body);
        const response = await instance.orders.create({
            amount: amount,
            currency: currency,
            receipt: receipt,
            notes: {
                cartId, userId
            }
        })
        res.send(response);
        res.end();
    } catch (error) {
        res.send({ err: error.message });
        res.end();
    }
})

rzpRouter.post("/paymentInfo", async (req, res) => {
    try {
        const { rzpPayId, rzpOrdId, rzpPaySignature } = req.body;
        const generated_signature = hmac_sha256(rzpOrdId + "|" + rzpPayId, process.env.RZP_SECRET);
        if (generated_signature == rzpPaySignature) {
            // payment is successful
            const data = await paymentCollection.insertOne({ rzpPayId, rzpOrdId, rzpPaySignature });
            res.send(data);
            res.end();
        } else {
            res.send({err: "signature invalid"});
            res.end();
        }
    } catch (error) {
        res.send({ err: error.message });
        res.end();
    }
})

module.exports = rzpRouter;