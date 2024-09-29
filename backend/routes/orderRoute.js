import express from "express"
import  {placerOrder, placerOrderStripe, allOrders, userOrder, updateStatus, verifyStripe} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router()

// Aadmin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payement

orderRouter.post("/place", authUser,  placerOrder)
orderRouter.post("/stripe", authUser, placerOrderStripe)


// Utilisateur 

orderRouter.post("/userorders", authUser, userOrder)

 // verify payment

 orderRouter.post("/verifyStripe",authUser, verifyStripe)

export default orderRouter