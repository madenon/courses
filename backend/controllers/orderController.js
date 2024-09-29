// Passsé  la commande en utilisant une methode  cahs
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// global variable

const currency = "eur";
const deleveryCahrge = 2500;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placerOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "CASH", //COD
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Commande passée" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// par stripe
const placerOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency:currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency:currency,
        product_data: {
          name: "Frais de livraison",
        },
        unit_amount: deleveryCahrge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });
    res.json({success:true, session_url:session.url})
 
 
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}// 
const verifyStripe = async(req, res) =>{
  const {orderId, success, userId} = req.body 
  try {
    if (success ==='true') {
      await orderModel.findByIdAndUpdate(orderId, {payment:true});
      await userModel.findByIdAndUpdate(userId, {cartData:{}})
      res.json({success:true})
      
    } else{
      await orderModel.findByIdAndDelete(orderId)
      res.json({success:false})
    }
    
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
    
  }
}


// tout les commandes de Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User Orders Data for frontend
const userOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//update order status , pour l admin
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Statut mis  à jour" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placerOrder,
  placerOrderStripe,
  allOrders,
  userOrder,
  updateStatus,
  verifyStripe
};
