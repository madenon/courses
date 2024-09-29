import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item)=>(item.bestseller));
    setBestSeller(bestProduct.slice(0,5));
  },[products]);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <p className="text-gray-400 m-2 p-3">NOS</p>
        <Title text1={"meilleur"} text2={"Vente"} />
        <p className="w-3/4 m-auto text-xs md:text-base text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          quidem sit asperiores quod aperiam molestiae suscipit explicabo
          dolores repudiandae deleniti porro assumenda, libero ipsum minima
          magni quae, eaque molestias atque?
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 shadow">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
