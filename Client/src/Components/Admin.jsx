import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [DataUser, SetDataUser] = useState("");
  let navigate = useNavigate();


  
    useEffect(() => {
      const token = sessionStorage.getItem('token')
      if (token != null)
      {
              navigate("/dashboard");

      } else
      {
        return null
      }
      
    },[])
  const Authen = async () => {
    const dataUser = {
      login,
      password,
    };

    const data = await axios({
      method: "post",
      url: "/connect",
      data: dataUser,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data.data)
    if (data.status == 201 && data.data.message == "Success")
    {
      sessionStorage.setItem("token",data.data.token)
      navigate("/dashboard");
    }
    else
    {
      console.log("Error")
    }
    

  };

  return (
    <div className="form  container mx-auto max-w-[550px] sm:mt-[16%]">
      <form className="w-full max-w-sm" autoComplete="off">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              value={login}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              onChange={(e) => setLogin(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              value={password}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold"></label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => Authen()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
