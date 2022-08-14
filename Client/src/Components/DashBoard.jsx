import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";



const DashBoard = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("token") == null)
    {
      navigate("/admin")
    }
    else
    {
      return null
    }
  },[])
  return (
    <>
      <div className="dashboard w-full h-full flex justify-between mx-auto">
        <div className="side_bar  w-[18%]  min-h-[550px]">
          <h1 className="text-center font-extrabold mt-8">Admin</h1>
          <div className="p-6  gap mx-12">
            <ul>
              <li className="mb-4 text-white font-bold bg-[#4834d4] py-2 px-6 rounded-md left-0">
                <Link  to="admin">Admin</Link>
              </li>
              <li className="mb-4 text-white font-bold bg-[#4834d4] py-2 px-6 rounded-md left-0">
                <Link to="Categories">Categories</Link>
              </li>
              <li className="mb-4 text-white font-bold bg-[#4834d4] py-2 px-6 rounded-md left-0">
                <Link to="Produit">Produit</Link>
              </li>
              <li className="mb-4 text-white font-bold bg-[#4834d4] py-2 px-6 rounded-md left-0">
                <Link to="Produit">Client</Link>
              </li>
              <li className="mb-4 text-white font-bold bg-[#4834d4] py-2 px-6 rounded-md left-0">
                <Link to="Produit">Commande</Link>
              </li>
              
         
              <li className="mb-4 text-white font-bold bg-[#4834d4] py-2 px-6 rounded-md left-0">
                <Link to="Produit">Messages</Link>
              </li>
              <li className="mb-4 text-white font-bold bg-[#4834d4] py-2 px-6 rounded-md left-0">
                <Link to="Produit">Deconnected</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
