import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";
const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fectProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fectProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ---productData ---- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* --Product images ---- */}

        <div className="flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex  sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData?.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]  ">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/*------------   Product info   -----------  */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.dull_icon} alt="" />
            <p className="pl-2">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {productData?.price} {currency}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Taille à selectionner</p>
            <div className="flex gap-2">
              {productData &&
                productData?.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="bg-black  rounded-full text-white px-8 py-3 text-sm active:bg-gray-700">
            AJOUTER AU PANIER
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Tout nos produits sont 100%  originaux </p>
            <p>Payement Cash à la livraison valable.</p>
            <p>
              Vous possedez d'un retour de colis en cas d'échange de 7 jours{" "}
            </p>
          </div>
        </div>
      </div>

      {/* ------------     Description &  avis  -------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Avis</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
     <p>Chez nous , nous faciliton les achats en ligne avec les nouvelles technologie</p>
     <p>Le site web de commerce électronique affichent généralement des produits ou des services ainsi que des informations détaillées.</p>
        </div>
      </div>
      {/* ******  display  realated prodcut*** */}
      <RelatedProduct  category={productData?.category} subCategory={productData?.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
