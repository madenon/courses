import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Nous"} text2={"Contacter"} />
      </div>
      <div
        className="my-10 flex flex-col justify-center 
       md:flex-row gap-10 mb-28"
      >
        <img
          className="w-full md:max-w-[480px] rounded-full "
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6"> 
<p className="font-semibold text-xl text-gray-600">Notre magasin
</p>
<p className="text-gray-500">980tra  Bnaco <br /> 30 Abidjan Cote d'ivoire</p>
<p className="text-gray-500">Tel:(255)097655 <br /> Email: nfr-@ecommerce.ci</p>
<p className="font-semibold text-xl text-gray-600">Carrières chez Boutique groupe</p>
<p className="text-gray-500">Savoir plus sur nos offres de recrutements</p>
        <button className="border border-black px-8 py-4 hover:bg-black hover:text-white duration-500 uppercase">parcourir nos offres</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
