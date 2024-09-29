import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    token,
    navigate,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };
  return (
    <div className="flex  items-center justify-between py-5 font-semibold">
      <Link to="/">
        <img src={assets.logo_n} className="w-9" alt="" />
      </Link>
      <ul className="hidden   sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>ACCUEIL</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>A PROPOS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          {token && (
            <div className="group-hover:block hidden absolute  dropdown-menu  right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500  rounded">
                <p  className=" cursor-pointer hover:text-black">Mon Profile</p>
                <p onClick={()=>navigate("/orders")} className=" cursor-pointer hover:text-black">
                  Mes Commandes
                </p>
                <p
                  onClick={logout}
                  className=" cursor-pointer hover:text-black"
                >
                  Déconnexion
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p
            className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 text-white
        bg-black aspect-square rounded-full text-[8px]"
          >
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* sidebar menu pour les petits ecrans */}
      <div
        className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex  items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p className=" cursor-pointer">Retour au menu</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            ACCUEIL
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            A PROPOS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
