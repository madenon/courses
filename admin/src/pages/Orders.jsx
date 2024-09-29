import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOredrs = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

 const  statusHandler =  async(event, orderId) =>{
   try {
    const response = await axios.post(backendUrl + "/api/order/status", {orderId, status:event.target.value}, {headers:{token}})
     if (response.data.success) {
        await  fetchAllOredrs()
     }
  } catch (error) {   
    console.log(error)
    toast.error(response.data.message)
    
   }
 }

  useEffect(() => {
    fetchAllOredrs();
  }, [token]);

  return (
    <div>
      <h3>Page commandes</h3>
      <div>
        {orders.map((order, index) => (
          <div  className="shadow-sm  bg-slate-100s grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border border-gray-200 p-5  md:p-8 md:my-4 text-xs sm:text-sm text-gray-700 " key={index}>
            <img  className="w-12" src={assets.parce_image} alt="" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity }  {" "} <span>{item.size}</span>{" "}
                      </p>
                    );
                  } else {
                    return (
                      <p  className="py-0.5 pl-2" key={index}>
                        {item.name} x {item.quantity + " "} <span className="pl-5">{item.size}</span>{" "}
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName}</p>
              <div>
                <p>{order.address.rue + " ,"}</p>
                <p>
                  {order.address.city +
                    " ," +
                    order.address.state +
                    " " +
                    order.address.country +
                    " " +
                    order.address.zipcode}
                </p>
                <p>
                  Point Rélaix pour récupérer le colis:{" "}
                  {order.address.pointrelaix}
                </p>
              </div>
              <p>Numéro de Téléphone: {order.address.phone + " ," + " "}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">Articles : {order.items.length} </p>
              <p className="mt-3">Methode :{order.paymentMethod} </p>
              <p>Payment : {order.payment ? "Fait" : "En attente"} </p>
              <p>Date : {new Date(order.date).toLocaleDateString()} </p>
            </div>
            <p className="text-sm sm:text-[15px] font-bold">
              {order.amount} {currency}
            </p>
            <select onChange={(event)=>statusHandler(event,order?._id)}  value={order.status} className="font-semibold">
              <option value="Commande passée">Commande passée</option>
              <option value="Commande en préparation">Commande en préparation</option>
              <option value="En Cours pour la livraison">En Cours pour la livraison</option>
              <option value="Commande Expédié">Commande Expédié</option>
              <option value="En Rupture">En Rupture</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
