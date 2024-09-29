import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmiHandler = async (e) => {
    console.log(email, password);
    e.preventDefault();
    const response = await axios.post(backendUrl + "/api/user/admin", {
      email,
      password,
    });
    if (response.data.success) {
      setToken(response.data.token);
    } else {
        toast.error(response.data.message)
    }
    try {
    } catch (error) {
        console.log(error)
        toast.error(error.message)

    }

  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Adminstrateur</h1>
        <form onSubmit={onSubmiHandler}>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Adress Email
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              className="rounded-full w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="admin-hg@ecomerce.ci"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="off"
              className="rounded-full w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="mot de passe"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
