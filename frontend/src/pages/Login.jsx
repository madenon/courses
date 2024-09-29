import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrenState] = useState("S'inscrire");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      if (currentState === "S'inscrire") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  
  return (
    <div className="bg-transparent bg-gray-300">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4  text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Connexion" ? (
          ""
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-3  py-2 border border-gray-800"
            placeholder="Votre nom"
            autoComplete="off"
            required
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-3  py-2 border border-gray-800"
          placeholder="Votre Email"
          autoComplete="off"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-3  py-2 border border-gray-800"
          placeholder="Votre mot de passe"
          autoComplete="off"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer capitalize">Mot de passe oublier ?</p>
          {currentState === "Connexion" ? (
            <p
              onClick={() => setCurrenState("S'inscrire")}
              className="cursor-pointer"
            >
              Créer compte
            </p>
          ) : (
            <p
              onClick={() => setCurrenState("Connexion")}
              className="cursor-pointer"
            >
              Se connecter
            </p>
          )}
        </div>

        <button className="bg-black/50 text-white font-light px-8 py-2 mt-4">
          {currentState === "Connexion" ? "Se connecter" : "S'inscrire"}
        </button>
      </form>
    </div>
  );
};

export default Login;
